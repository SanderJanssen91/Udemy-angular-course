import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from "app/shared/data-storage.service";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService, private authService: AuthService) { };

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
      (response: Response) => console.log(response)
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
