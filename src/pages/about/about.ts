import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { Slides } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }

  ngAfterViewInit() {
    //this.slides.freeMode = true;
    this.slides.centeredSlides = true;
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
  gotoPartido() {
    this.navCtrl.push("PartidoPage");
  }

  slideChanged() {
    console.log("slide change");
    let currentIndex = this.slides.getActiveIndex();
    //console.log('Current index is', currentIndex);
    //console.log("slides", this.slides);

    //console.log("length", this.slides.length());
  }

  getIndex(slide) {

    console.log("prop de slide", slide);

    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  slideTap(event) {
    console.log("slide tap/click");
    //console.log("slide tap", event);
    let currentIndex = this.slides.getActiveIndex();
    if (event.clickedIndex != currentIndex) {
      this.slides.slideTo(event.clickedIndex);
    }
  }
}
