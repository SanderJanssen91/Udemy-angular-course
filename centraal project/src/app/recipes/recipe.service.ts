import { Recipe } from "app/recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Router, ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private http: Http, private shoppingListService: ShoppingListService, private router: Router, private route: ActivatedRoute) { };

  private recipes: Recipe[] = [];

  setRecipes(recipes:Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipeIngredientsToShoppingList(recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}