import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
onImageClick() {
    console.log('Image clicked');
    this.router.navigate(['/collections']);
  }

    onViewCollectionClick() {
    console.log('View Collection button clicked');
    this.router.navigate(['/collections']);
  }
}


