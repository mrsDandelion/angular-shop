import { Component, OnInit } from '@angular/core';
import { StoreService } from './../../servises/store.service'

@Component({
  selector: 'app-visibility-items',
  templateUrl: './visibility-items.component.html',
  styleUrls: ['./visibility-items.component.css']
})
export class VisibilityItemsComponent implements OnInit {

  constructor(private StoreService: StoreService) { }

  public visibilityItems

  public setVisibilityAll(){
    this.StoreService.setVisibilityAll();   
  }
  
  public setVisibility(type){
    this.StoreService.setVisibility(type);
  } 

  ngOnInit() {
    this.StoreService.getVisibility().subscribe(value => {
      this.visibilityItems = value;     
    });
  }
}
