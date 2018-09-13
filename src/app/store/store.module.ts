//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStore } from './store.component';
import { ListOfClothesModule } from './list-of-clothes-men/list-of-clothes-men.module';
import { SortComponent } from './sort/sort.component';
import { VisibilityItemsComponent } from './visibility-items/visibility-items.component';
//import { ItemComponent } from './item/item.component';
//import { ListOfClothesComponent } from './list-of-clothes/list/list-of-clothes.component';

@NgModule({
  declarations: [
    AppStore,
    SortComponent,
    VisibilityItemsComponent,
    //ItemComponent
  ],
  imports: [
    CommonModule,
    ListOfClothesModule
  ],
  exports: [AppStore],
  //declarations: [ListOfClothesModule],
  providers: [],
  bootstrap: [AppStore]
})
export class storeModule { }
