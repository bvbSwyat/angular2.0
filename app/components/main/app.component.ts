import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<header-menu>Loading...</header-menu>' +
              '<div class="Content">' +
                  '<h3>Welcome to MyDelivery Service! <br><i>&nbsp;&nbsp; With us Your dreams will come true..</i></h3>' +
                  '<h4 class="center">Choose Your role:</h4>' +
                  '<carousel [images]="myImages" [speed]="200">Loading...</carousel>'+
              '</div>'
})
export class AppComponent {

  myImages = {left: ["image1.png", "image2.png", "image3.JPG"], right: ["image1.1.jpg", "image2.1.jpg", "image3.1.png"]};
  speed = 200;

}
