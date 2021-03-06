import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";

const shoppingListRoutes: Routes = [
    { path: 'shoppinglist', component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [RouterModule]
})

export class ShoppingListRoutingModule {

}