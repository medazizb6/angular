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
          'https://www.google.com/search?client=opera-gx&hs=hgp&sca_esv=5424022ca174e17e&sxsrf=AKL5yDheK5KXSEiFhu2dj41SXtid5E0HTA:1795424178324&udm=2&fbs=ACAhTvwdifjn2dKXmjtOfBxVFl_koHVe5RLSnJlTH2QYaq_YVSZ0SclCv1C3Nkltzojnu-NBip-0TY-yWfpcNuNDqsWDnnPEtwbjQRm8zJr_cAQYK0bJ0Ch8nj0EHp1MxeaZwAVuDIma0bh_L9rijVQQyOFkorKaTKgvvhrkvTC0ak4LPSgJhH3kuzZbNdP2y4QdRuOebuPr&q=image+angular&sa=X&ved=2ahUKEwjZsfqi3J2YAxUH2AIHHSHSF6sQtKgLegQIFhAB&biw=1488&bih=834&dpr=1.25#sv=CAMSUxoyKhBlLTdRMkx0Rm9lMHV2dlRNMg43UTJMdEZvZTB1dnZUTToOdEpoQWVyR1dmemM3UU0gBCoXCgFzEhBlLTdRMkx0Rm9lMHV2dlRNGAEwAVACGAcgh7vqxAJKCBACGAEgAigB',
      },
      {
        title: 'conference ReactJS',
        description: 'ReactJS',
        date: '25-07-2003',
        nbrMax: 15,
        nbrReservation: 11,
        picture:
          'https://www.google.com/search?client=opera-gx&hs=jZB&sca_esv=135b68bef58d2195&sxsrf=AKL5yDhIkcmbOPxoCRG6XUCcuhgDHBNY2g:1795428868781&udm=2&fbs=ACAhTvwdifjn2dKXmjtOfBxVFl_koHVe5RLSnJlTH2QYaq_YVdLmrLcUHX_SwxOCJnubtIIfkFBtNyvuNluxGIMJwZYVMqv6rIn83-ZO10wQYTBLYhCDabPsO4ZIy3vg3q-KBfs07d8x4lb2kgYniRiXfR7qoDHr6wni65oW4VkZvJFnVKCCaAJ_H7c2YeE5apbyS_c12yG_&q=reactjs&sa=X&ved=2ahUKEwjqo8Xf7Z2YAxW5hv0HHTL6HOwQtKgLegQIJBAB&biw=1488&bih=834&dpr=1.25#sv=CAMSUxoyKhBlLTFZUkNUbUJuRVJfbnNNMg4xWVJDVG1CbkVSX25zTToORml6MWlHQzVnbTBBY00gBCoXCgFzEhBlLTFZUkNUbUJuRVJfbnNNGAEwAVACGAcgx_-GiQpKCBACGAEgAigB ',
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
