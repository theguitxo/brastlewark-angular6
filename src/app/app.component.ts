import { Component } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { GlobalsService } from './services/globals.service';
import { GnomesService } from './services/gnomes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private globals:GlobalsService,
              private utils:UtilsService,
              private gnomes:GnomesService) {

    this.globals.cargando = true;
    this.globals.primeraBusqueda = false;

    console.log(this.utils.fechaHora() + 'Construct App');

    this.gnomes.cargarLista();

  }

  cargando(): boolean {
    return this.globals.cargando;
  }

}
