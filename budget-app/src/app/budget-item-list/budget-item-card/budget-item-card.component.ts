import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() xButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  deleteButton() {
    this.xButton.emit();
  }


  onCardClick() {
    this.cardClick.emit();
  }
}
