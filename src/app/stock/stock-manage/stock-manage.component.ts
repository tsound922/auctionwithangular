import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;
  constructor() { }

  ngOnInit(): void {
    this.stocks = [
      new Stock(1, "First stock", 1.21, 2.3, "This is a test stock", ["IT", "Internet"]),
      new Stock(2, "Second stock", 3.93, 3.7, "This is a test stock", ["IT", "Finance"]),
      new Stock(3, "Third stock", 1.29, 4.7, "This is a test stock", ["Finance", "Blockchain"]),
      new Stock(4, "Forth stock", 5.99, 1.9, "This is a test stock", ["IT", "Health"]),
      new Stock(5, "Fifth stock", 3.49, 2.5, "This is a test stock", ["IT", "Game"]),
      new Stock(6, "Sixth stock", 3.39, 4.2, "This is a test stock", ["IT", "Internet"])
    ];
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price:number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}