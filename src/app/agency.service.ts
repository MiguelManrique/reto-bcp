import { Injectable } from '@angular/core';
import agencias from './_files/agencias.json'

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  listaAgencias : {agencia: string, distrito: string, provincia: string, departamento: string, lat: number, lon: number}[]=agencias;
  constructor() { }

  getAgencia(name: string) {
    for(let i=0; i<this.listaAgencias.length; i++){
      if(this.listaAgencias[i].agencia == name){
        return this.listaAgencias[i];
      }
    }
    debugger
    return [];
   }

  getAgencias() {
    return this.listaAgencias;
  }
}
