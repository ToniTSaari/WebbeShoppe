import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../app.services'
import { Time } from '../time'

@Component({
  selector: 'app-time-get',
  templateUrl: './time-get.component.html',
  styleUrls: ['./time-get.component.css']
})
export class TimeGetComponent implements OnInit {

  constructor(private service: Service) { }
  time: Time[] = []
  ngOnInit(): void
  {
    this.fetchTime()
  }
  fetchTime(): void
  {
    this.service.getTime().subscribe(time => this.time = time)
  }

}
