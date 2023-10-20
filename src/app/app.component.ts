import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class FirstApp {
  title = 'first-my-app';
  description = 'Hello World';
  parentMessage:string = 'Pesan dari parent yang akan digunakan di child component'
}

