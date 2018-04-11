import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Recipe } from './recipe';
import { RECIPIES } from './mock-recipies';
import { MessageService } from './message.service';

@Injectable()
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipies(): Observable<Recipe[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('RecipeService: fetched recipies');
    return of(RECIPIES);
  }

  getRecipe(moeilijkheidsgraad: number): Observable<Recipe> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`RecipeService: fetched recipe moeilijkheidsgraad=${moeilijkheidsgraad}`);
    return of(RECIPIES.find(recipe => recipe.moeilijkheidsgraad === moeilijkheidsgraad));
  }
}