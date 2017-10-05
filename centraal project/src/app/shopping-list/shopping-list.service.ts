import { Ingredient } from "app/shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
    addIngredients(ingredients: Ingredient[]){
        var i:number=0;
        for (i; i<ingredients.length; i++){
            this.addIngredient(ingredients[i])
        }
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}