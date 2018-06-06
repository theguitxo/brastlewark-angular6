import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  public textoBusqueda: string;
  public error: boolean;

  @Input('showReset') mostrarReset: boolean = false;
  @Input('placeholder') placeholder: string = '';
  @Output() buscar: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.error = false;
  }

  ngOnInit() {
  }

  /**
   * ejecutaBusqueda: comprueba si se ha introducido un texto para buscar y muestra un mensaje de error en caso
   * que no exista o emite un mensaje para ejecutar la busqueda en caso que si.
   */
  public ejecutaBusqueda(): void {

    this.error = false;

    if (!this.textoBusqueda) {

      this.error = true;

    } else {

      console.log('CajaBusquedaComponent. Texto a buscar: ' + this.textoBusqueda);
      this.buscar.emit(this.textoBusqueda);

    }

  }

  /**
   * reset: inicializa el texto de busqueda a cadena en blanco y ejecuta la busqueda para obtener el listado completo
   */
  public reset(): void {

    this.textoBusqueda = '';
    this.buscar.emit(this.textoBusqueda);

  }

}
