import { Component, OnInit, DoCheck } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, DoCheck {

  constructor(private counterService: CounterService) { }

  activeCounter: number;
  inactiveCounter: number;

  ngOnInit() {
    console.log(this.activeCounter);
  }

  ngDoCheck() {
    this.activeCounter = this.counterService.activeCounter;
    this.inactiveCounter = this.counterService.inactiveCounter;
  }

}
