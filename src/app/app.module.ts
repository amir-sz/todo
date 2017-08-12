import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// imports mock web api 


import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
