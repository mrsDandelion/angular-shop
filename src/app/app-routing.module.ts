import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStore } from './store/store.component'
import { ItemComponent } from './store/item/item.component';



const routes: Routes = [
  { path: 'store', component: AppStore},​
  { path: 'store/123', component: ItemComponent},​
  { path: '', redirectTo: '/store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
