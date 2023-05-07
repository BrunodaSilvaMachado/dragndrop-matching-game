import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IPin, OneMatch} from './model/pin';
import { PinService } from './pin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dragndrop-matching-game';

  todo: IPin[] = [];
  done: OneMatch[] = [];

  constructor( private pinService: PinService ){}

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.todo = this.pinService.getPins();
    this.done = this.shuffleArray(this.pinService.getPinsHover());
  }

  drop(event: CdkDragDrop<IPin[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  matchPredicate(item: CdkDrag<IPin>, list: CdkDropList<IPin[]>) {
    return list.data.map((pin)=>pin.id).includes(item.data.id);
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  shuffleArray<T>(inputArray: T[]){
    return inputArray.sort(()=> Math.random() - 0.5);
  }
}
