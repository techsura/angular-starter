import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsFormComponent } from './items/items-form/items-form.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ShoppingComponent } from './shopping.component';

const routes: Routes = [
  {
    path: '', component: ShoppingComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'categories', component: CategoryListComponent},
      {path: 'categories-form', component: CategoryFormComponent},
      {path: 'items', component: ItemsListComponent},
      {path: 'items-form', component: ItemsFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
