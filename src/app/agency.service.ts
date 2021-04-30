import { Injectable } from '@angular/core';
import agencias from './_files/agencias.json'
import {Agency} from './_models/Agency'
@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  listaAgencias! : Agency[];
  constructor() {
    this.listaAgencias = agencias;
   }

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
    if(localStorage.getItem('data') === null){
      return this.listaAgencias;
    }else{
      this.listaAgencias = JSON.parse(localStorage.getItem('data') || '[]')
    }
    return this.listaAgencias;
  }

  updateAgencia(agencia: Agency,num: number){
    for(let i=0; i<this.listaAgencias.length; i++){
      if(i == num){

        this.listaAgencias[i].agencia = agencia.agencia;
        this.listaAgencias[i].distrito = agencia.distrito;
        this.listaAgencias[i].provincia = agencia.provincia;
        this.listaAgencias[i].departamento = agencia.departamento;
        this.listaAgencias[i].direccion = agencia.direccion;
        this.listaAgencias[i].lat= agencia.lat;
        this.listaAgencias[i].lon= agencia.lon;
      }
    }
    //Aqui se modifica el local storage
    localStorage.setItem('data',JSON.stringify(this.listaAgencias));
  }
}
