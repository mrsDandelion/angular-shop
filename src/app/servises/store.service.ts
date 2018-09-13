import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {Product} from './cloth.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  public collectionClothes = {
    men: [
      {
        id: '1',
        name: 'Todo 1',
        image: 'skirt1.png',
        price: 100,
        color: ['red','green','#458d'],
        size: ['XS', 'S']
      },
      {
        id: '2',
        name: 'Aodo 2',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
      ,
      {
        id: '3',
        name: 'Codo 3',
        image: 'skirt2.png',
        price: 9,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      },
      {
        id: '4',
        name: 'sdfodo 2',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
      ,
      {
        id: '5',
        name: 'Casodo 3',
        image: 'skirt2.png',
        price: 9,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
    ],
    woman: [
      {
        id: '11',
        name: 'woman 1',
        image: 'skirt1.png',
        price: 10,
        color: ['red','green','#458d'],
        size: ['XS']
      },
      {
        id: '12',
        name: 'aoman 2',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
      ,
      {
        id: '13',
        name: 'noman 3',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
    ],
    child: [
      {
        id: '21',
        name: 'child 1',
        image: 'skirt1.png',
        price: 10,
        color: ['red','green','#458d'],
        size: ['XS']
      },
      {
        id: '22',
        name: 'child 2',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      }
      ,
      {
        id: '23',
        name: 'child 3',
        image: 'skirt2.png',
        price: 12,
        color: ['yellow','blue'],
        size: ['S', 'M', 'L', 'XL']
      } 
    ]
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
  
  subjectClothes = new BehaviorSubject<any>(this.collectionClothes);
  
  public getСlothes(): Observable<{men:Product[],woman:Product[],child:Product[]}> {
    return this.subjectClothes;
  }
  public sortCollectionByPrice(){
    for(let category in this.collectionClothes){
      for(let item = 0; item < this.collectionClothes[category].length; item++){
        this.collectionClothes[category].sort((a, b)=>{
        return a.price - b.price;
      })}
    }
    this.subjectClothes.next(this.collectionClothes);
  }

  public sortCollectionByName(){
    for(let category in this.collectionClothes){
      for(let item = 0; item < this.collectionClothes[category].length; item++){
      this.collectionClothes[category].sort((a, b)=>{
        return a.name > b.name;
      })}
    }
    this.subjectClothes.next(this.collectionClothes);
  }  
}   
