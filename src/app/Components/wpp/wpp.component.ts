import { Component } from '@angular/core';

@Component({
  selector: 'app-wpp',
  templateUrl: './wpp.component.html',
  styleUrls: ['./wpp.component.css']
})
export class WppComponent {

  enviarMensaje() {
    const numero = '3816823272'; // Reemplaza con el número de teléfono
    const mensaje = 'Hola, este es un mensaje desde Angular!'; // El mensaje a enviar
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  }

}
