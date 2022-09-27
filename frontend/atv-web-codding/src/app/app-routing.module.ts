import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { ProviderComponent } from './components/providers/providers.component';

const routes: Routes = [
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "providers",
    component: ProviderComponent
  },
  {
    path: " ",
    redirectTo: "./clients",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
