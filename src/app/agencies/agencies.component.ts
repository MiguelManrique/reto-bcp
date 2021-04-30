import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  listaAgencias: any;
  
  constructor(private agenciaService: AgencyService) {
  }

  ngOnInit(): void {
    this.listaAgencias = this.agenciaService.getAgencias();
  }

}
