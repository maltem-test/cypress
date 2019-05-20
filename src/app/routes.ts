import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path      : '',
    redirectTo: '/counter',
    pathMatch : 'full',
  },

  // counter app
  {
    path        : 'counter',
    loadChildren: './counter/counter.module#CounterModule',
  },

  // todo-list app
  {
    path        : 'todos',
    loadChildren: './todos/todos.module#TodosModule',
  }
];
