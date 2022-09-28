import { Client } from './../../models/client';
import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { NgForm } from "@angular/forms"

@Component({
  selector: "client-component",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})


export class ClientsComponent implements OnInit {
  
  client = {} as Client

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

  createClient(form: NgForm) {
    this.clientService.createClient(this.client).subscribe(() => {
      this.updateForm(form)
      })
  }

  updateForm(form: NgForm) {
    this.getClient();
    form.resetForm();

    this.client = {} as Client
  }

}
