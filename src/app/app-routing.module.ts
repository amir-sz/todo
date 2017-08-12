    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
     
    import { TodoComponent }   from './todo-list.component';
     
    const routes: Routes = [
      { path: 'list',  component: TodoComponent },
      /*{ path: 'detail/:id', component: HeroDetailComponent },*/
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}