import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  recipies: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipies();
  }

  getRecipies(): void {
    this.recipeService.getRecipies()
      .subscribe(recipies => this.recipies = recipies.slice(1, 5));
  }
}