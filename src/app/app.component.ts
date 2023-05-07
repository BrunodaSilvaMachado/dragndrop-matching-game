import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IPin, OneMatch, pins, pinshover } from './model/pin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragndrop-matching-game';

  todo: IPin[] = this.shuffleArray(pins);

  done: OneMatch[] = this.shuffleArray(pinshover);

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
