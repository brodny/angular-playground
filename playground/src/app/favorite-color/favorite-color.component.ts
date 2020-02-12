import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.less']
})
export class FavoriteColorComponent {
  favoriteColor : string = '';

  readValue() {
    alert(this.favoriteColor);
  }

  setValue() {
    let newValue : string = this.favoriteColor.toUpperCase();
    this.favoriteColor = newValue;
  }
}
