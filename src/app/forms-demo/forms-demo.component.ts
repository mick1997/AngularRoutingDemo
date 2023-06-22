import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent {

  title = 'Template driven forms';

  countryList: country[] = [
    new country('1', "China"),
    new country('2', "USA"),
    new country('3', 'England')
  ];

  onsubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}

export class country {
  constructor(public id: string, public name: string) {}
}
