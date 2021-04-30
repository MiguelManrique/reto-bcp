import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyService } from '../agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agency: any;

  constructor(private agencyService: AgencyService,
      private route: ActivatedRoute
    ) { 
      this.route.params.subscribe(params =>{
        const agencianame = params['agencianame'];
        this.agency = this.agencyService.getAgencia(agencianame);
        console.log(this.agency);
      }); 
    }

  ngOnInit(): void { 
  }

  submitForm(){
    alert('Actualizado!');
  }

}
