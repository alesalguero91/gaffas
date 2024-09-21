import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/models/carrito';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/models/producto';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServ: CarritoService) { }

  producto = products


  carti = cart
  item: any
  carta: any
  ngOnInit(){
    const name = this.activatedRoute.snapshot.params['name'];

    const usuariosBuscados = this.producto.filter(producto => producto.name === name);

    this.item = usuariosBuscados[0]
/*
    console.log(this.carritoServ.obtenerProductos())

    this.carritoServ.cargarProductos()
    this.carta = this.carritoServ.cargarProductos()
    console.log("Carta", this.carta)
*/
    console.log("item", this.item)
  }

  save(prod:any){

    this.carritoServ.cargarProductos()
    this.carritoServ.agregarProducto(prod)
    this.carritoServ.cargarProductos()
  }

//Empezamos aqui
  addToCart(product: Product) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: Product) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1; // Incrementa la cantidad si ya está en el carrito
    } else {
      cart.push({ ...product, quantity: 1 }); // Añade el nuevo producto con cantidad 1
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart)
  }


}

