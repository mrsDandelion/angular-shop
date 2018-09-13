import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CurrencyPipe } from "@angular/common"

@Component({
  selector: 'app-item-of-clothes',
  templateUrl: './item-of-clothes.component.html',
  styleUrls: ['./item-of-clothes.component.css'],
  providers: [CurrencyPipe]
})
export class ItemOfClothesComponent implements OnInit {
  @Input() public clothItem
  
  
  constructor() {}

  ngOnInit() {}

}
