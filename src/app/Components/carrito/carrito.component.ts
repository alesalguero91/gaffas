import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: Product[] = [];
  subTotal:any[]=[]

  total!:number



  mensaje!: string; // El mensaje a enviar

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    for (let index = 0; index < this.cartItems.length; index++) {
      let element = this.cartItems[index].quantity* this.cartItems[index].value;
      this.subTotal.push(element)
    }
    this.sumarSubs()

  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.name !== productId);
    this.sumarSubs()
  }
  sumarSubs(){
    this.total = this.subTotal.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);

  }

  HacerElEncargo(){
    this.hacerElMsj()
    const numero = '3816823272'; // Reemplaza con el número de teléfono
    this.mensaje // El mensaje a enviar
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  }

  hacerElMsj(){

    let plantilla = "Buenas tardes."
    for (let i = 0; i < this.cartItems.length; i++) {
      const element = "Cantidad: " + this.cartItems[i].quantity + " - " + this.cartItems[i].name+ " en " + this.cartItems[i].payment
      + " cuota/s de $ " + this.cartItems[i].value.toFixed(0)
      console.log(element)

      plantilla += element

    }

    let total = ". Haciendo un importe total de $"+ this.total.toFixed(0)

    plantilla = plantilla + total

    this.mensaje= plantilla
    console.log(this.mensaje)

  }

}
