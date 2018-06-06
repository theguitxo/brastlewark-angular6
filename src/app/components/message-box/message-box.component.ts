import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input("errors") errores: any;

  constructor(private utils:UtilsService) { }

  ngOnInit() {
  }

  /**
   * hayErrores: comprueba si se ha recibido algún valor para el parámetro errores (sea texto o una matriz)
   * @returns: true en caso que errores tenga contenido, false en caso contrario
   */
  hayErrores(): boolean {
    if (this.erroresEsTexto()) {
      return this.utils.checkUndefinedNullTrue(this.errores);
    } else if (this.erroresEsArray()) {
      return (this.utils.checkArrayHasData(this.errores));
    }
  }

  /**
   * getErrores
   * @returns: devuelve el contenido de la propiedad errores
   */
  getErrores(): any {
    return this.errores;
  }

  /**
   * erroresEsTexto: comprueba si el contenido de errores es de tipo 'string'
   * @returns: true si es de tipo 'string', false en caso contrario
   */
  erroresEsTexto(): boolean {
    return typeof this.errores === 'string';
  }

  /**
   * erroresEsArray: comprueba si el contenido de errores es de tipo 'array'
   * @returns: true si es de tipo 'array', false en caso contrario
   */
  erroresEsArray(): boolean {
    return Array.isArray(this.errores);
  }

}
