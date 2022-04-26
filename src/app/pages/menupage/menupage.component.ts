import { OrderDetaisService } from './../../services/order-detais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  getMenuId: any;
  menuData: any;

  constructor(private param:ActivatedRoute, private service: OrderDetaisService) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId ? value : null;
      })
      console.log(this.menuData, 'menuData');
    }
  }

}
