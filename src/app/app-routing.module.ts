import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { AgencyComponent } from './agency/agency.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingComponent,
    pathMatch: 'full'
  },
  {
    path: 'agencias',
    component: AgenciesComponent
  },
  {
    path: 'agencias/:agencianame',
    component: AgencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
