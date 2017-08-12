import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemService } from './item.service';

// imports mock web api 


import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { ItemsComponent } from './items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
