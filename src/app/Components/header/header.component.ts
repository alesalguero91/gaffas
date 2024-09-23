import { Component } from '@angular/core';
import { cart } from 'src/app/models/carrito';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

  dive= cart
  valor = cart.length

  constructor(private cartServ: CarritoService){}
  ngOnInit(){
    console.log("esta", this.dive.length)
    this.cartServ.cargarProductos()
  }

}
