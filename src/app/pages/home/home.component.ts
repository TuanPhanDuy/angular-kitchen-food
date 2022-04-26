import { OrderDetaisService } from './../../services/order-detais.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodData: any;

  constructor(private service:OrderDetaisService) { }

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
