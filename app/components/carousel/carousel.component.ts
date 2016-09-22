
import { Component, ElementRef, HostListener, Input, Renderer, ViewChild } from '@angular/core';

@Component({
   selector: "carousel",
   template:  "<div class='Carousel center'>" +
                "<div>" +
                  "<ul #carouselLList side='left' class='Carousel-leftside no_list'>" +
                    "<li #carouselItem *ngFor='let leftImage of images.left'>" +
                        "<img  src='/app/img/{{leftImage}}'/>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
                "<div>" +
                  "<ul #carouselRList class='Carousel-rightside no_list'>" +
                    "<li *ngFor='let rightImage of images.right'>" +
                      "<img  src='/app/img/{{rightImage}}'/>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</div>"
})

export class CarouselDirective {
  @Input() images: any;
  @Input() speed: number;

  @ViewChild('carouselLList') cLList ;
  @ViewChild('carouselRList') cRList;
  @ViewChild('carouselItem') carouselItem;

  slidesNumber: number;
  bottomPosition: number;
  sideName: string;

  constructor(element:ElementRef) {

    this.images = element.nativeElement.getAttribute('images');
    this.speed = element.nativeElement.getAttribute('speed');

  }

  ngOnInit() {
    this.slidesNumber = this.images.left.length;
      console.log('inited', this.images);
  }

  ngAfterViewInit() {
    this.runSide('left', 'cLList');
    this.runSide('right', 'cRList');
  }


  runSide(sideName: string, sideElement: string) {
    let imageWidth = this.carouselItem.nativeElement.offsetHeight
    let bottomPos = (this.slidesNumber-1) * imageWidth;
    let topPos = 0;
    if (sideName == 'right') {
      bottomPos = 0;
      topPos = (this.slidesNumber-1) * imageWidth;
      this[sideElement].nativeElement.scrollTop = topPos;
    }
    setInterval(() => {
      if (this[sideElement].nativeElement.scrollTop == bottomPos) {
        this[sideElement].nativeElement.scrollTop = topPos;
      } else {

        let finishPos = this[sideElement].nativeElement.scrollTop + sideName != 'right' ? imageWidth : -imageWidth;
        setInterval(() => {
          let currPos = this[sideElement].nativeElement.scrollTop;
          if (currPos != finishPos) {
            this[sideElement].nativeElement.scrollTop += sideName != 'right' ? 1 : -1;
          }
        },5);
      }
    }, 2000);
  }
}
