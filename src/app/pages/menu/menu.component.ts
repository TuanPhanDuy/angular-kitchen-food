import { OrderDetaisService } from './../../services/order-detais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foodData: any;

  constructor(private service:OrderDetaisService) { }

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
