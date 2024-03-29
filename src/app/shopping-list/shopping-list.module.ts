import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [FormsModule, RouterModule, SharedModule],
  exports: [ShoppingListComponent, ShoppingListEditComponent],
})
export class ShoppingListModule {}
