import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStore } from './store.component';
import { ListOfClothesModule } from './list-of-clothes/list-of-clothes.module';
import { SortComponent } from './sort/sort.component';
import { VisibilityItemsComponent } from './visibility-items/visibility-items.component';

@NgModule({
  declarations: [
    AppStore,
    SortComponent,
    VisibilityItemsComponent
  ],
  imports: [
    CommonModule,
    ListOfClothesModule
  ],
  exports: [AppStore],
  providers: [],
  bootstrap: [AppStore]
})
export class storeModule { }
