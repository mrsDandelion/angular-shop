import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {storeModule} from "./store/store.module"
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './store/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,        
  ],
  imports: [
    BrowserModule, 
    storeModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  bootstrap: [AppComponent]
})
export class AppModule {}
