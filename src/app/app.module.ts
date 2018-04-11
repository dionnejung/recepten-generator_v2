import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { RecipiesComponent }    from './recipies/recipies.component';
import { RecipeService }        from './recipe.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    RecipiesComponent
  ],
  providers: [ MessageService, RecipeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }