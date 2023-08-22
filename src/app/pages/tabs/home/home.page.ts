import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  accounts: any[] = [];
  bannerConfig!: SwiperOptions;
  featureConfig!: SwiperOptions;
  features: any[] = [];
  transactions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id: 1, acc_no: '57868945098', balance: '200000' },
      { id: 2, acc_no: '20067091201', balance: '50000' },
      { id: 3, acc_no: '40163081205', balance: '80000' }
    ];
    this.features = [
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
      { id: 2, color: 'white', icon: 'send', name: 'Request' },
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
      { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
    ];
    this.transactions = [
      { id: 1, to: 'Ardi', date: '2023-08-20', amount: 5000 },
      { id: 2, to: 'Indah', date: '2023-08-10', amount: 7000 },
      { id: 3, to: 'Ikmal', date: '2023-07-12', amount: -3250 },
      { id: 4, to: 'Lutfi', date: '2023-07-01', amount: 1000 },
      { id: 5, to: 'Andri', date: '2023-06-21', amount: -800 },
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }
}
