import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * fechaHora: devuelve una cadena con la fecha y hora del sistema
   * @param flecha si ha de mostrar el caracter '>' después de la cadena de fecha y hora
   * @returns: la cadena con la fecha y hora del sistema
   */
  fechaHora(flecha: boolean = true): string {

    let fecha: Date = new Date();

    let dia: string = this.menorDiez(fecha.getDate());
    let mes: string = this.menorDiez(fecha.getMonth());
    let anyo: string = fecha.getFullYear().toString();

    let horas: string = this.menorDiez(fecha.getHours());
    let minutos: string = this.menorDiez(fecha.getMinutes());
    let segundos: string = this.menorDiez(fecha.getSeconds());

    return dia + '-' + mes + '-' + anyo + ' ' + horas + ':' + minutos + ':' + segundos + (flecha ? ' > ' : ' ');

  }

  /**
   * menorDiez: comprueba si un número es menor de diez, añadiendole un 0 delante si lo es.
   * @param numero: el número a comprobar
   * @returns: una cadena de texto con el número recibido formateado.
   */
  private menorDiez(numero: Number): string {

    return (numero < 10 ? '0' + numero.toString() : numero.toString());

  }

  /**
   * checkUndefinedNullTrue: Comprueba si un valor no es indefinido, ni null y tiene contenido
   * @param value el valor a comprobar
   * @returns: true, en caso de que el valor cumpla la condición, false en caso contrario
   */
  checkUndefinedNullTrue(value: any): boolean {
    return (value !== undefined && value !== null && value);
  }

  /**
   * checkArrayHasData: comprueba si un array no es ni indefinido, ni nulo y tiene datos
   * @param value: el array a comprobar
   * @returns: true en caso que el array tenga contenido, false en caso contrario
   */
  checkArrayHasData(value: Array<any>): boolean {
    return (value !== undefined && value !== null && value.length > 0);
  }

  /**
   * elimina los espacios (' ') de una cadena de texto
   * @param cadena: la cadena a la que se han de eliminar los espacios
   * @returns la cadena formateada sin los espacios
   */
  eliminaEspaciosCadena(cadena: string): string {
    return cadena.split(' ').join('');
  }

}
