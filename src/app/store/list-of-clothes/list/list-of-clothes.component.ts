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
      const coutOfImg = 3;
      for(let type in products){
        const array = [];
        for (let listSlider = 0, item = 0; 
          listSlider < products[type].length / coutOfImg || item < products[type].length; 
          listSlider++, item = item + coutOfImg)
        {
          array[listSlider] = [];         
          let count = 0; 
          while( count !== coutOfImg){
            if(!products[type][item + count]){
              break;
            }
            array[listSlider].push(products[type][item + count]); 
            count++;
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
