import { Component } from '@angular/core';
import { CarritoService } from './Services/carrito.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RamiroWeb';

  constructor(private cartServ: CarritoService){}

  ngOnInit(){

  }
}
