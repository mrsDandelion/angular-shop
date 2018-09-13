import { Component, OnInit } from '@angular/core';
import { StoreService } from './../../../servises/store.service'

@Component({
  selector: 'app-list-of-clothes',
  templateUrl: './list-of-clothes.component.html',
  styleUrls: ['./list-of-clothes.component.css'],
})
export class ListOfClothesComponent implements OnInit {

  constructor(private StoreService: StoreService) { }

  ngOnInit() {
    this.clotherItemsMen = createArray(this.StoreService.getСlothes().men);  
    this.clotherItemsWoman = this.StoreService.getСlothes().woman;
    this.clotherItemsChild = this.StoreService.getСlothes().child;

    function createArray(arr){
      const array: any = [];
        for (let j = 0, i = 0; j < arr.length / 3 || i < arr.length; j++, i = i + 3) {
          array[j] = [];
          array[j].push(arr[i]);
          if (arr[i + 1]) {
            array[j].push(arr[i + 1]);
          }
          if (arr[i + 2]) {
            array[j].push(arr[i + 2]);
          }
        }
        return array;
    }
  }

  public clotherItemsMen = [];
  public clotherItemsWoman = [];
  public clotherItemsChild = [];

  public positionSliderMen = 0;
  public positionSliderWoman = 0;
  public positionSliderChild = 0;

  public getVisibillityItems(nameItems){
    if(nameItems === 'men'){
      return this.StoreService.getVisibilityMen();
    }
    if(nameItems === 'women'){
      return this.StoreService.getVisibilityWoman();
    }
    if(nameItems === 'child'){
      return this.StoreService.getVisibilityChild();
    }
  }

  public setleft(value){
    if(value === "men" && this.positionSliderMen === 0){
      this.positionSliderMen = this.clotherItemsMen.length - 1;
      return 
    }
    if(value === "men"){
      this.positionSliderMen--;
      return 
    }
  }

  public setRight(value){
    if(value === "men" && this.positionSliderMen === this.clotherItemsMen.length - 1){
      this.positionSliderMen = 0;
      return 
    }
    if(value === "men"){
      this.positionSliderMen++;
      return 
    }
  }
}
