import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock-manage.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock(1, "First stock", 1.21, 2.3, "This is a test stock", ["IT", "Internet"])
  }

}
