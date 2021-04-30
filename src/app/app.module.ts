import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { AgencyService } from './agency.service';
import { NgxJdenticonModule } from "ngx-jdenticon";
import { AgencyComponent } from './agency/agency.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HeaderComponent,
    AgenciesComponent,
    AgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJdenticonModule,
    FormsModule
  ],
  providers: [
    AgencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
