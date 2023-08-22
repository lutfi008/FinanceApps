import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue = 'in';

  constructor() { }

  ngOnInit() {
    this.allTransactions = [
      { id: 1, to: 'Ardi', date: '2023-08-20', amount: 5000 },
      { id: 2, to: 'Indah', date: '2023-08-10', amount: 7000 },
      { id: 3, to: 'Ikmal', date: '2023-07-12', amount: -3250 },
      { id: 4, to: 'Lutfi', date: '2023-07-01', amount: 1000 },
      { id: 5, to: 'Andri', date: '2023-06-21', amount: -800 },
    ];
    this.filterTransactions();
  }
  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event : any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

}
