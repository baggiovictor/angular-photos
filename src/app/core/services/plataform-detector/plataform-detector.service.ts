import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformDetectorService {
  private platformId = inject(PLATFORM_ID);

  isPlatformBrowser() {
    console.log(this.platformId);
    return isPlatformBrowser(this.platformId);
  }
}
