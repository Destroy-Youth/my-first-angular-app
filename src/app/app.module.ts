import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './exercises/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './exercises/success-alert/success-alert.component';
import { ServerComponent } from './exercises/server/server.component';
import { ServersComponent } from './exercises/servers/servers.component';
import { UserNameComponent } from './exercises/user-name/user-name.component';
import { DetailsComponent } from './exercises/details/details.component';
import { ExampleExerciseComponent } from './exercises/example-exercise/example-exercise.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeListComponent } from './recipes/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { EditShoppingListComponent } from './shopping-list/edit-shopping-list/edit-shopping-list.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    UserNameComponent,
    DetailsComponent,
    ExampleExerciseComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    EditShoppingListComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
