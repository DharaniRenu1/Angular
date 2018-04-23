import { Component, OnInit,Input } from '@angular/core';

import { Dish } from '../shared/dish';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input()
  dish = Dish;


  constructor() { }

  ngOnInit() {
  }
  
}
