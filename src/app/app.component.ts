import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Routing_Demo';

  getClass() {
    // Return the CSS class you want to apply when the link is active
    return 'active';
  }
}
