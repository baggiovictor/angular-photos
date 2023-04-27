import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private service = inject(PhotoService);

  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['user'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.service
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
