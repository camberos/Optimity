import { Component, ViewChild } from '@angular/core';
import { AnimationType } from './carousel/carousel.animations';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Optimity';
  @ViewChild(CarouselComponent)
  carousel!: CarouselComponent;

  animationType = AnimationType.Fade;

  constructor() {}

  setAnimationType(type: { value: AnimationType; }) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }


}
