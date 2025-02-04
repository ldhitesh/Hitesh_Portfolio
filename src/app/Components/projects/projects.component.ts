import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    projects = [
      { 
        name: 'Job Hunter', 
        description: 'A platform connecting job seekers with recruiters for career opportunities', 
        image: 'https://idoxacx.sufydely.com/JobHunterLogo.png', 
        github: 'https://github.com/user/project1' 
      },
      { 
        name: 'Cab Booking App', 
        description: 'A seamless cab booking system for easy and reliable ride-hailing services', 
        image: 'assets/Cab_app.png', 
        github: 'https://github.com/user/project2' 
      },
      { 
        name: 'Library Management', 
        description: 'A system for managing book inventory, lending, and user memberships efficiently', 
        image: 'assets/library-management.png', 
        github: 'https://github.com/user/project3' },
      { 
        name: 'Tic Tac Toe', 
        description: 'A fun two-player strategy game with a simple and interactive interface', 
        image: 'assets/tic-tac-toe.png', 
        github: 'https://github.com/user/project4' },
      { 
        name: 'Chat App', 
        description: 'A real-time messaging application for one-to-one and group text communication', 
        image: 'assets/chat-app.png', 
        github: 'https://github.com/user/project5' },
      { 
        name: 'Photography Blog', 
        description: 'A blog platform to showcase photography with engaging visual storytelling', 
        image: 'assets/Photo_page.png', 
        github: 'https://github.com/user/project6' }
    ];
  
    visibleProjects = 3; // Initial projects to display
  
    loadMore() {
      if (this.visibleProjects < this.projects.length) {
        this.visibleProjects += 3; // Load 3 more projects each time
      }
    
    }
  }
