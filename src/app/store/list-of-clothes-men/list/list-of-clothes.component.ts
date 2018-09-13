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
      const resultObj = {};
      for(let type in products){
        const array = [];
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
        resultObj[type] = array;
      }
      return resultObj;
    }
  }

  public clothesItems

  public positionSliders = {
    men: 0,
    women: 0,
    child: 0
  }

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
    if(value === "men" && this.positionSliders.men === 0){
      this.positionSliders.men = this.clothesItems.men.length - 1;
      return 
    }
    if(value === "men"){
      this.positionSliders.men--;
      return 
    }
  }

  public setRight(value){
    if(value === "men" && this.positionSliders.men === this.clothesItems.men.length - 1){
      this.positionSliders.men = 0;
      return 
    }
    if(value === "men"){
      this.positionSliders.men++;
      return 
    }
  }
}
