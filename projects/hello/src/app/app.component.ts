
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello {{ name }}!</h1>
    </div>
  `,
  styles: ['h1 { color: darkred; }']
})
export class AppComponent {
  name = 'world';
}
