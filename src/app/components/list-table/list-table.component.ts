import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  @Input('columns') columnas: Array<any>;
  @Input('data') datos: Array<any>;
  @Input('orderColumn') campoOrden: string;
  @Input('actions') acciones: Array<string>;
  @Input('title') titulo: string = '';
  @Input('orderType') tipoOrden: string = 'ASC';

  @Output('execute') ejecutarAccion: EventEmitter < any > = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    if (this.campoOrden === undefined) this.campoOrden = '';

    if (this.acciones === undefined) this.acciones = [];

    console.log('Columnas:');
    console.log(this.columnas);
    console.log('Datos:');
    console.log(this.datos);
    console.log('Campo orden: ' + this.campoOrden);

  }

  /**
   * ejecutar: llama a ejecutar la acción definida para un registro de listado,
   * enviando los datos de la línea como parámetro
   * @param item: los datos de la línea sobre la que se ha ejecutado la opción
   */
  ejecutar(item) {
    console.log('TablaListadoComponent. Ejecutar acción: ', item);
    this.ejecutarAccion.emit(item);
  }

}
