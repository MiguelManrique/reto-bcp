import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../agency.service';
import { Agency } from '../_models/Agency'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agency: any;
  agencies: any;
  numAgency: any;

  constructor(private agencyService: AgencyService,
      private router: Router,
      private route: ActivatedRoute
    ) { 
      this.route.params.subscribe(params =>{
        const agencianame = params['agencianame'];
        this.agency = this.agencyService.getAgencia(agencianame);
        console.log(this.agency);
      });
      this.agencies = this.agencyService.getAgencias();
      for(let i=0; i<this.agencies.length; i++){
        if(this.agencies[i].agencia == this.agency.agencia){
          this.numAgency = i;
        }
      }
    }

  ngOnInit(): void { 
  }

  submitForm(agency: Agency){
    alert('Actualizado!');
    agency.agencia = this.agency.agencia;
    agency.distrito = this.agency.distrito;
    agency.provincia = this.agency.provincia;
    agency.departamento = this.agency.departamento;
    agency.direccion = this.agency.direccion;
    agency.lat = this.agency.lat;
    agency.lon = this.agency.lon;

    this.agencyService.updateAgencia(agency,this.numAgency);
    this.router.navigate([`/agencias`]);
  }
}
