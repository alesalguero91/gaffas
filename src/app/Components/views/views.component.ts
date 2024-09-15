import { Component } from '@angular/core';
import { products } from 'src/app/models/producto';





@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent {


  mode= products
  pag = 1
  constructor(){
  }

  ngOnInit(): void {
    console.log(this.mode[0])

  }
}
