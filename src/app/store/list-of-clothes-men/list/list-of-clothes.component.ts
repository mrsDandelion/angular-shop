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
      this.clothesItems = createObjForSlider(products);     
    });

    this.StoreService.getVisibility().subscribe(value => {
      this.visibilityItems = value;     
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
  public visibilityItems

  public positionSliders = {
    men: 0,
    woman: 0,
    child: 0
  }

  public setleft(value){
    if((value === "men" && this.positionSliders.men === 0) ||
        ((value === "woman" && this.positionSliders.woman === 0)) ||
        ((value === "child" && this.positionSliders.child === 0))    
      ){
      this.positionSliders[value] = this.clothesItems[value].length - 1;
      return 
    }
    if(value === "men" ||
      value === "woman" ||
      value === "child"){
      this.positionSliders[value]--;
      return 
    }
  }

  public setRight(value){
    if((value === "men" && this.positionSliders.men === this.clothesItems.men.length - 1) ||
      (value === "woman" && this.positionSliders.woman === this.clothesItems.woman.length - 1) ||
      (value === "child" && this.positionSliders.child === this.clothesItems.child.length - 1))     
    {
      this.positionSliders[value] = 0;
      return 
    }
    if(value === "men" ||
      value === "woman" ||
      value === "child" ){
      this.positionSliders[value]++;
      return 
    }
  }
}
