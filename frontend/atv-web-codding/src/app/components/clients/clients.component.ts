import { Client } from './../../models/client';
import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "client-component",
  templateUrl: "./clients.component.html"
})


export class ClientsComponent implements OnInit {
  
  clients: Client[] = [];

  constructor(private clientService: ClientService){};

    ngOnInit() {
      this.getClient()
    }

  getClient() {
    this.clientService.getClient().subscribe({
      next: (clients) => {
        this.clients = clients;
      }
    })
  }

}
