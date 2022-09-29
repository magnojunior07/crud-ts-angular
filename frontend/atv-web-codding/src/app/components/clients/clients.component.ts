import { Client } from './../../models/client';
import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { NgForm } from "@angular/forms"
import { last } from 'rxjs';

@Component({
  selector: "client-component",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})


export class ClientsComponent implements OnInit {

  client = {} as Client

  clients: Client[] = [];

  client_search: String = ""
  list_keys: String = ""


  search_client(keyup: string) {

    switch(keyup) {
      case "Backspace":
        this.list_keys = this.list_keys.slice(0, -1)
        if(this.list_keys.length <= 1) {
          this.list_keys = ""
        }
      break
      case "Shift":
        keyup = ""
      break
      default:
        this.list_keys = this.list_keys + keyup
    }

    this.client_search = this.list_keys

    return this.client_search
}

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

  saveClient(form: NgForm) {
    if (this.client.id !== undefined){
      this.clientService.editClient(this.client).subscribe(() => {
        this.updateForm(form)
      })
      } else {
        this.clientService.createClient(this.client).subscribe(() => {
          this.updateForm(form)
        })
    }
  }

  deleteClient(client: Client) {
      this.clientService.deleteClient(client).subscribe(() => {
        this.getClient()
      })
  }

  editClient(client: Client) {
    this.client = {...client}
  }

  updateForm(form: NgForm) {
    this.getClient();
    form.resetForm();

    this.client = {} as Client
  }

}
