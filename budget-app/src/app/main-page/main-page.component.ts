import { Component } from '@angular/core';
import { BudgetItem } from 'src/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  budgetItemsArray: BudgetItem[] = new Array<BudgetItem>();

  addItem(newItem: BudgetItem) {
    this.budgetItemsArray.push(newItem);
  }


  deleteItem(item: BudgetItem) {
    let index = this.budgetItemsArray.indexOf(item);
    this.budgetItemsArray.splice(index, 1);
  }
}