import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello {{ name }}!</h1>
      <p>{{ name | funkycase }}</p>
      <p>{{ currentTime | date: 'h:mm a on MMMM d, y' }}</p>
    </div>
  `,
  styles: ['h1 { color: darkred; }'],
})
export class AppComponent {
  name = 'world';
  currentTime = Date();
}
