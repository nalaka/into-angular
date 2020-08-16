import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobar',
  template: `
    <div>
      <h3>Your options</h3>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>

      <div *ngIf="selectedItem == ''">
        Please type-in one of the options.
      </div>
      <div *ngIf="items.includes(selectedItem)">
        Selected option is: <strong>{{ selectedItem }}</strong>
      </div>

      <div>
        <input
          #txt
          type="text"
          [value]="selectedItem"
          [attr.aria-label]="ariaLabel"
          [class]="customClasses"
          [style]="customStyles"
        />
        <button (click)="handleClick(txt.value)">Select</button>
        <p *ngIf="msg != ''">{{ msg }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class FoobarComponent implements OnInit {
  items = ['foo', 'bar'];
  selectedItem = '';
  msg = '';
  ariaLabel = 'Option to select';
  customClasses="class1 class2";
  customStyles = 'width: 200px; background-color: lightblue';

  handleClick(val: string) {
    if (this.items.includes(val)) {
      this.selectedItem = val;
      this.msg = '';
    } else {
      this.selectedItem = '';
      this.msg = 'Invalid option';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
