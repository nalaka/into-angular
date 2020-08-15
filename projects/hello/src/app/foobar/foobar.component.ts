import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobar',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <div *ngIf="selectedItem == ''; else tplNoItemSelected">
      Please select an option
    </div>
    <ng-template #tplNoItemSelected>{{ selectedItem }}</ng-template>
  `,
  styles: [],
})
export class FoobarComponent implements OnInit {
  items = ['foo', 'bar'];
  selectedItem = '';

  constructor() {}

  ngOnInit(): void {}
}
