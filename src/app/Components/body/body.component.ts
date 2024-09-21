import { Component } from '@angular/core';
import { cart } from 'src/app/models/carrito';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  changuito = cart

  constructor(private carritoServ: CarritoService){}
  ngOnInit(): void {

  }


}
