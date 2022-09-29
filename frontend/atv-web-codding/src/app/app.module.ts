import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProviderComponent } from './components/providers/providers.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

const maskConfig: Partial<IConfig> = {
  validation: false
}

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    ProviderComponent,
    CpfPipe,
    CnpjPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
