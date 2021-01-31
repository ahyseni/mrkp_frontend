import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  template: `
    <p>
      components works!
    </p>
  `,
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
