import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;
  constructor(public router:Router) { }

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

  create() {
    this.router.navigateByUrl('/stock/0');
    console.log(this.stocks)
  }

  update(stock:Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)
    
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