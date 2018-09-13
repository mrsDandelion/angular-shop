//import { TodoListItem } from 'src/app/todo-list/todo-list-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public visibilityMen = true;
  public visibilityWoman = true;
  public visibilityChild = true;
  
  public getVisibilityMen(){
    return this.visibilityMen;
  }
  public getVisibilityWoman(){
    return this.visibilityWoman;
  }
  public getVisibilityChild(){
    return this.visibilityChild;
  }
  public setDifferentValueMen(){
    this.visibilityMen = !this.visibilityMen;
  }
  public setDifferentValueWoman(){
    this.visibilityWoman = !this.visibilityWoman;
  }
  public setDifferentValueChild(){
    this.visibilityChild = !this.visibilityChild;
  }
  public getСlothes()/*: TodoListItem[]*/ {
    return this.collectionClothes;
  }
  public sortCollectionByPrice(){
    for(let category in this.collectionClothes){
      for(let item = 0; item < this.collectionClothes[category].length; item++){
      this.collectionClothes[category].sort((a, b)=>{
        return a.price - b.price;
      })}
    }
  }
  public sortCollectionByName(){
    for(let category in this.collectionClothes){
      for(let item = 0; item < this.collectionClothes[category].length; item++){
      this.collectionClothes[category].sort((a, b)=>{
        return a.name > b.name;
      })}
    }
  }
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
}   
