import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Routing_Demo';
  employee = new Employee();

  getClass() {
    // Return the CSS class you want to apply when the link is active
    return 'active';
  }

  typesOfCSS: string[] = ['CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind CSS'];

  save() {
    alert('saved');
  }

  undo() {
    alert('Undo done!');
  }

  onSubmit() {
    alert('Employee information: ' + JSON.stringify(this.employee));
  }
}
