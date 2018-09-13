import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StoreService } from './../../servises/store.service'

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
    const allClothes = this.StoreService.getСlothes();    
    let currentItem;
    for(let category in allClothes){
      for(let item = 0; item < allClothes[category].length; item++){
        if(allClothes[category][item].id === id){
          currentItem = allClothes[category][item];
        }
      }      
    }   
    return currentItem 
  }  
}