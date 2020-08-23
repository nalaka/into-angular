import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello {{ name }}!</h1>
      <p>{{ name | funkycase }}</p>
      <p>{{ currentTime | date: 'h:mm a on MMMM d, y' }}</p>
    </div>

    <app-foobar></app-foobar>
    <app-baz [msg]="msgIn" (nameSelected)="onNameSelected($event)"></app-baz>
    <p>
      Name received from the baz component:<br />
      <code>{{ nameOut }}</code>
    </p>
  `,
  styles: ['h1 { color: darkred; }'],
})
export class AppComponent {
  name = 'world';
  currentTime = Date();
  msgIn = 'Please enter your name';
  nameOut = '<No Ourput from child component yet>';

  onNameSelected(name: string) {
    this.nameOut = name;
  }
}
