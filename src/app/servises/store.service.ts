import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from './cloth.model'
import { collectionClothes } from './clothes'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(){}

  public sort = "price"
  
  subjectSort = new BehaviorSubject<any>(this.sort);

  public getSort(){
    return this.subjectSort
  }

  public visibility = {
    men: true,
    women: true,
    child: true
  }

  subjectVisibl = new BehaviorSubject<any>(this.visibility);

  public getVisibility(){
    return this.subjectVisibl
  }
  public setVisibility(type){
    if(type === 'men'){
      this.visibility.men = !this.visibility.men       
    }
    if(type === 'women'){
      this.visibility.women = !this.visibility.women
    }
    if(type === 'child'){
      this.visibility.child = !this.visibility.child
    }
    this.subjectVisibl.next(
      this.visibility
    )  
  }
  public setVisibilityAll(){
    this.subjectVisibl.next(
      {
        men: true,
        women: true,
        child: true
      }
    )  
  }

  subjectClothes = new BehaviorSubject<any>(collectionClothes);
  
  public getСlothes(): Observable<{men:Product[],woman:Product[],child:Product[]}> {
    return this.subjectClothes;
  }
  public sortCollectionByPrice(){
    for(let category in collectionClothes){
      for(let item = 0; item < collectionClothes[category].length; item++){
        collectionClothes[category].sort((a, b)=>{
        return a.price - b.price;
      })}
    }
    this.subjectClothes.next(collectionClothes);
    this.subjectSort.next("price");
  }

  public sortCollectionByName(){
    for(let category in collectionClothes){
      for(let item = 0; item < collectionClothes[category].length; item++){
      collectionClothes[category].sort((a, b)=>{
        return a.name > b.name;
      })}
    }
    this.subjectClothes.next(collectionClothes);
    this.subjectSort.next("name");
  }  
}   
