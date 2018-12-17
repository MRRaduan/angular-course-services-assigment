import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  activeCounter = this.counterService.activeCounter;
  inactiveCounter = this.counterService.inactiveCounter;

  ngOnInit() {
  }

}
