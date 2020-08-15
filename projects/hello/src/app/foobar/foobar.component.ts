import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobar',
  template: `
    <p>
      foobar works!
    </p>
  `,
  styles: [
  ]
})
export class FoobarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
