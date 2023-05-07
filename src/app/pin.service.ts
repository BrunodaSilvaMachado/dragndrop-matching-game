import { Injectable } from '@angular/core';
import { IPin, OneMatch, pins } from './model/pin';
import { pinshover } from './model/pin';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  pinList: IPin[] = pins;
  oneMatchList: OneMatch[] = pinshover;
  constructor() { }

  getPins(){
    return this.pinList;
  }

  getPinsHover(){
    return this.oneMatchList;
  }
}
