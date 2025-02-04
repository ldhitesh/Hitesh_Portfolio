import { Component } from '@angular/core';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent {
  visibleSketches = 3; // Initial sketches to display

  sketches = [
    'assets/sketch1.jpg',    
    'assets/sketch2.jpg',
    'assets/sketch3.jpg',
    'assets/sketch4.jpg',
    'assets/sketch5.jpg'
  ];


  loadMore() {
    if (this.visibleSketches < this.sketches.length) {
      this.visibleSketches += 3; // Load 3 more projects each time
    }
  }

  MoreSketches(){
    
  }
}
