import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  /*title: string;
  state: boolean;
  constructor() {
    this.title = 'Home 4DAS 10';
    this.state = false;
  }
  ngOnInit(): void {

}
change(): void {
  this.title = 'Home 4DAS 9';
  this.state = true;
*/
  list: conference[];
  searchTitle: string;
  title: string;
  constructor() {
    this.title = 'home';
  }
  ngOnInit(): void {
    this.list = [
      {
        title: 'conference Angular',
        description: 'Angular',
        date: '12-06-2003',
        nbrMax: 20,
        nbrReservation: 19,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxrJ9a_0-bYvmsYk47I-eTWxJ0B4hrPWY7feGeT2sGw&s=10',
      },
      {
        title: 'conference ReactJS',
        description: 'ReactJS',
        date: '25-07-2003',
        nbrMax: 15,
        nbrReservation: 11,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWFWxYHGVco9w58fjAOXQB0uu2oHi_yw2DGIVeZ0edg&s=10',
      },
    ];
  }
  participate(conf: conference): void {
    conf.nbrReservation++;
  }
  matchesSearch(title: string): boolean {
    if (!this.searchTitle || this.searchTitle.trim() === '') {
      return true;
    }
    return title.toLowerCase().includes(this.searchTitle.trim().toLowerCase());
  }
}
