import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<header-menu>Loading...</header-menu>' +
              '<div class="Content">' +
                  '<router-outlet></router-outlet>'+
              '</div>'
})
export class AppComponent {



}
