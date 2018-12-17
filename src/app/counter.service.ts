import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { 
  }

  public activeCounter: number = 0;
  public inactiveCounter: number = 0;

  onActive() {
   this.activeCounter++;
  }

  onInactive() {
    this.inactiveCounter++;
  }


  // activeCounter = this.usersService.activeUsers.length;

}
