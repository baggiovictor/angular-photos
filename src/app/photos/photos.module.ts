import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  declarations: [],
  imports: [PhotoModule, PhotoListModule, PhotoFormModule],
  exports: [PhotoModule, PhotoListModule, PhotoFormModule],
})
export class PhotosModule {}
