import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './exercises/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './exercises/success-alert/success-alert.component';
import { ServerComponent } from './exercises/server/server.component';
import { ServersComponent } from './exercises/servers/servers.component';
import { UserNameComponent } from './exercises/user-name/user-name.component';
import { DetailsComponent } from './details/details.component';
import { ExampleExerciseComponent } from './exercises/example-exercise/example-exercise.component';


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

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
