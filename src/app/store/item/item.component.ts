import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StoreService } from './../../servises/store.service'
import { collectionClothes } from './../../servises/clothes'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  id:string
  clothItem 

  constructor(private activateRoute: ActivatedRoute, private StoreService: StoreService){}  
  
  ngOnInit(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.clothItem = this.getCloth(this.id);    
  }

  getCloth = function(id){ 
    let currentItem;
    for(let category in collectionClothes){
      for(let item = 0; item < collectionClothes[category].length; item++){
        if(collectionClothes[category][item].id === id){
          currentItem = collectionClothes[category][item];
        }
      }      
    }   
    return currentItem 
  }  
}