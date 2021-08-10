import { Component } from '@angular/core';
import { Service } from './app.services';
//import { time } from 'console';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'webbeshoppe';
  time = 'warner';
}

