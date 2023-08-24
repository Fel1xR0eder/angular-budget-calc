import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent {

  @Input() item: BudgetItem = new BudgetItem('', null);

  onSubmit(form: NgForm) {
    console.log(form);
    
  }
}
