import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { CommentComponent } from './comment/comment.component';
import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CommentComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
