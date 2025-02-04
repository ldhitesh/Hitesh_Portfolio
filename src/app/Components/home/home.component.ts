import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  IKnowTexts: string[] = [
    'I know Angular',
    'I know Asp.Net',
    'I know Automation Testing',
    'I develop Web APIs',
    'I develop Front-End Application',
    'I Love Photography',
    'I do pencil sketching and painting'
  ];
  IKnowTextSingleText: string = this.IKnowTexts[0];
  index: number = 0;
  isAnimating: boolean = false;

  constructor() {
    this.startLoop();
  }

  startLoop() {
    setInterval(() => {
      this.isAnimating = true; // Start fade-out animation

      setTimeout(() => {
        this.index = (this.index + 1) % this.IKnowTexts.length; // Loop through texts
        this.IKnowTextSingleText = this.IKnowTexts[this.index];
        this.isAnimating = false; // Start fade-in animation
      }, 2000); // 1 second delay before updating text
    }, 5000); // Change text every 2 seconds (1s fade out + 1s delay)
  }
}
