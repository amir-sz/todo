import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemService } from './item.service';
import { RouterModule }   from '@angular/router'

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
    RouterModule.forRoot([
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'details',
        component: TodoDetailComponent
      },
      {
        path: '',
        redirectTo: '/items',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
