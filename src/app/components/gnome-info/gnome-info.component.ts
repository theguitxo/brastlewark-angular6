import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Gnome } from '../../interfaces/gnome';
import { UtilsService } from '../../services/utils.service';
import { GnomesService } from '../../services/gnomes.service';

@Component({
  selector: 'app-gnome-info',
  templateUrl: './gnome-info.component.html',
  styleUrls: ['./gnome-info.component.scss']
})
export class GnomeInfoComponent implements AfterContentInit {

  @Output('close') cerrarFicha: EventEmitter<any> = new EventEmitter<any>();
  @Input('gnome') gnomo: Gnome;

  private gnomosVistos: Array<number>;

  constructor(private utils:UtilsService,
              private gnomes:GnomesService) { }

  ngAfterContentInit() {
    this.gnomosVistos = Array();
  }

  /**
   * cerrar: reinicia la lista de gnomos vistos y envía un mensaje para ejecutar
   * la función de cierre de la ficha de gnomo
   */
  cerrar(): void {

    console.log('Cerrar ficha gnomo');
    // se reinicia la lista de gnomos vistos
    this.gnomosVistos = Array();

    // se cierra la ficha
    this.cerrarFicha.emit(null);

  }

  /**
   * verAmigo: carga los datos de un amigo de gnomo el la ficha
   * @param nombre: nombre del gnomo que se ha de consultar
   */
  verAmigo(nombre: string): void {

    // se almacena el gnomo actual en el historial de vistas
    this.gnomosVistos.push(this.gnomo.id);

    let idxAmigo: string = this.utils.eliminaEspaciosCadena(nombre);
    let amigo: Gnome = this.gnomes.gnomoPorNombre(idxAmigo);
    this.gnomo = amigo;

  }

  /**
   * mostrarBack: muestra el botón para volver al gnomo visto anterior en la ficha
   * @returns: true si se ha de mostrar el botón (existe historial), false en caso contrario
   */
  mostrarBack(): boolean {
    return this.utils.checkArrayHasData(this.gnomosVistos);
  }

  /**
   * amigoBack: extrae el último gnomo introducido en la lista de gnomos vistos
   * y muestra su información en la ficha
   */
  amigoBack(): void {

    let idx = this.gnomosVistos.pop();
    let amigo: Gnome = this.gnomes.gnomoPorId(idx);
    this.gnomo = amigo;

  }

}
