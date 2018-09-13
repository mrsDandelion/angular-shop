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
    this.StoreService.getСlothes().subscribe(products => {
      this.clothesItems = createObjForSlider(products)     
    });

    function createObjForSlider(products){
      for(let type in products){
        let array = [];
        for (let j = 0, i = 0; j < products[type].length / 3 || i < products[type].length; j++, i = i + 3) {
          array[j] = [];
          array[j].push(products[type][i]);
          if (products[type][i + 1]) {
            array[j].push(products[type][i + 1]);
          }
          if (products[type][i + 2]) {
            array[j].push(products[type][i + 2]);
          }          
        }
        products[type] = array;
      }
      return products;
    }
  }

  public clothesItems

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
      this.positionSliderMen = this.clothesItems.men.length - 1;
      return 
    }
    if(value === "men"){
      this.positionSliderMen--;
      return 
    }
  }

  public setRight(value){
    if(value === "men" && this.positionSliderMen === this.clothesItems.men.length - 1){
      this.positionSliderMen = 0;
      return 
    }
    if(value === "men"){
      this.positionSliderMen++;
      return 
    }
  }
}
