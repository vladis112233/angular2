import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"];
loggedIn = true;
isCollapsed : boolean = true;
toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
}
text : string = "Hello world";

visibility: boolean = true;
toggle() {
  this.visibility = !this.visibility;
}

}
