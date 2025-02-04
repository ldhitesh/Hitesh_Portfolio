import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {


  visiblePhotos = 3; // Initial sketches to display

  photos = [
    'assets/pic4.png',    
    'assets/pic5.png',    
    'assets/pic6.png',    
    'assets/pic7.JPG',    
  ];


  loadMore() {
    if (this.visiblePhotos < this.photos.length) {
      this.visiblePhotos += 3; // Load 3 more projects each time
    }
  
  }
}
