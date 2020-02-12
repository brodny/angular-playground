import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.less']
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');

  readValue() {
    alert(this.favoriteColorControl.value);
  }

  setValue() {
    var val = this.favoriteColorControl.value;
    let value : string = (val !== null && val !== undefined) ? val : "";
    let newValue : string = value.toUpperCase();
    this.favoriteColorControl.setValue(newValue);
  }
}
