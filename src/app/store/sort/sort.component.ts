import { Component, OnInit, ElementRef } from '@angular/core';
import { StoreService } from './../../servises/store.service'


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private StoreService: StoreService){}

  public sortItems
  
  public onChange(sort){
    
    if(sort === 'name'){
      this.StoreService.sortCollectionByName()
    }
    if(sort === 'price'){
      this.StoreService.sortCollectionByPrice()
    }    
  }
  ngOnInit() {
    this.StoreService.getSort().subscribe(value => {
      this.sortItems = value;    
    });
  }
}