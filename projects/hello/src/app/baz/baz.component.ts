import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baz',
  template: `
    <div>
      <p>{{ msg }}</p>
      <input #txt type="text" />
      <button (click)="handleClick(txt.value)">Ok</button>
    </div>
  `,
  styles: [
    'div{margin: 10px; padding: 5px; width: 200px; border: 1px solid grey}',
  ],
})
export class BazComponent {
  @Input() msg: string = 'Default prompt';
  @Output() nameSelected = new EventEmitter<string>();

  handleClick(val: string) {
    this.nameSelected.emit(val);
  }
}
