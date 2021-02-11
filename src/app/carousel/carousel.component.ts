import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, Input  } from '@angular/core';
import { AnimationType, fadeIn, fadeOut } from './carousel.animations';
import { ImagesService } from '../services/images.service'
import { Slide } from '../carousel/carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "400ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "400ms" } })
      ]),
    ])
  ]  
})
export class CarouselComponent implements OnInit {

  @Input() animationType = AnimationType.Fade;
  
  slides: Slide[] = [];
  currentSlide = 0;
  lenght = 0 ;
  imagesArray: any = [];

  constructor(private imagesService:ImagesService) { }

  ngOnInit() {
    this.preloadImagesArray();
    this.slides = this.imagesService.getAll();
    this.lenght=this.slides.length;
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
   }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  carouselButtonsStateLeft(currentSlide: number) {
    let state;
    state = currentSlide > 0 ? true : false;
    return state;
  }

  carouselButtonsStateRight(currentSlide: number) {
    let state;
    state = currentSlide < (this.lenght-1)? true : false;
    return state;
  }

  preloadImagesArray() {
    for (let i=0; i<this.slides.length; i++) {
      this.imagesArray.push(this.slides[i].images);
    }


  }


}
