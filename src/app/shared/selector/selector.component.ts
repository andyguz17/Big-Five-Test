import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  
  item!: number;
  @Output() select = new EventEmitter<number>();

  selectItem(item: number) {
    this.item = item;
    this.select.emit(item);
  }
}
