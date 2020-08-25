import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //输入注解
  @Input()
  rating: number = 0;

  stars:boolean[];

  constructor() { }

  ngOnInit(): void {
    this.stars = [];
    for(let i = 1; i <= 5; i++){
      this.stars.push(i < this.rating);
    }
    
  }

}
