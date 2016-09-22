
import {Component} from "@angular/core";

@Component({
   selector: "header-menu",
   template:  "<nav class='HeaderMenu'><a class='HeaderMenu-item no_link' href='{{menuItem.href}}' *ngFor='let menuItem of menuItems' routerLinkActive='active'> " +
                "{{menuItem.name}}" +
              "</a></nav>"
})

export class HeaderMenuComponent {
  menuItems = [
    {name: "Send Package", href:"sender"},
    {name: "I'm driver", href:"driver"},
    {name: "SignIn", href:"sign_in"},
  ]
}
