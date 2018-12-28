import { Component } from '@angular/core';
import { ShowmapComponent } from './showmap/showmap.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cargando-prueba';
  lat : number = 4.6097100;
  Ing :  number = -74.0817500;
}
