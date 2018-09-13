import { Component, OnInit } from '@angular/core';
import { StoreService } from './../../servises/store.service'

@Component({
  selector: 'app-visibility-items',
  templateUrl: './visibility-items.component.html',
  styleUrls: ['./visibility-items.component.css']
})
export class VisibilityItemsComponent implements OnInit {

  constructor(private StoreService: StoreService) { }

  public setVisibilityAll(){
    this.StoreService.visibilityChild = true;
    this.StoreService.visibilityMen = true;
    this.StoreService.visibilityWoman = true;    
  }
  public setVisibilityChild(){
    this.StoreService.visibilityChild = !this.StoreService.visibilityChild;
  }
  public setVisibilityMen(){
    this.StoreService.visibilityMen = !this.StoreService.visibilityMen;
  }
  public setVisibilityWoman(){
    this.StoreService.visibilityWoman = !this.StoreService.visibilityWoman;
  }

  public getVisibillityItems(nameItems){
    if(nameItems === 'men'){
      return this.StoreService.getVisibilityMen();
    }
    if(nameItems === 'women'){
      return this.StoreService.getVisibilityWoman();
    }
    if(nameItems === 'children'){
      return this.StoreService.getVisibilityChild();
    }
  }
  ngOnInit() {
  }

}
