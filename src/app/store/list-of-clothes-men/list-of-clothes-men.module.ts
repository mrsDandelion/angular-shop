import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOfClothesComponent } from './item-of-clothes/item-of-clothes.component';
import { ListOfClothesComponent } from './list/list-of-clothes.component'

import {RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ListOfClothesComponent],
  declarations: [ListOfClothesComponent,ItemOfClothesComponent],
  
})
export class ListOfClothesModule { }