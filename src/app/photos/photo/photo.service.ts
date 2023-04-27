import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API = 'http://localhost:3000';

  http = inject(HttpClient);

  listFromUser(userName: string) {
    return this.http.get<any[]>(`${this.API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<any[]>(`${this.API}/${userName}/photos`, { params });
  }
}
