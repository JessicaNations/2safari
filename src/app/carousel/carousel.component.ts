import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  jwtToken = window.localStorage.getItem('jwtToken');
  images$ = this.httpClient
    .get(`https://api.giphy.com/v1/gifs/search?q=dogs&imit=10&api_key=dc6zaTOxFJmzC`)
    .pipe(map((resp: any) => resp.data));


  constructor(
    private httpClient: HttpClient
    ) {}


  setJwtToken(token: string): void {
    this.jwtToken = token;
    window.localStorage.setItem('jwtToken', token);
  }
}
