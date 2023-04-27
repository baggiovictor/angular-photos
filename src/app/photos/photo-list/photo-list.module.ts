import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardComponent } from '../../shared/components/card/card.component';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverDirective } from 'src/app/shared/components/directives/darken-on-hover/darken-on-hover.directive';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [CommonModule, PhotoModule, CardComponent, DarkenOnHoverDirective],
})
export class PhotoListModule {}
