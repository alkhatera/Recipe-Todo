import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    
    this.ingSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredientsArray: Ingredient[]) => {
        this.ingredients = newIngredientsArray;
      }
    )
  }

  ngOnDestroy() {
    this.ingSub.unsubscribe();
  }
}
