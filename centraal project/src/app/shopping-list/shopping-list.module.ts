import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListRoutingModule } from "app/shopping-list/shopping-list-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingListRoutingModule
    ],
    providers: [
    ],
    bootstrap: []
})
export class ShoppingListModule { }