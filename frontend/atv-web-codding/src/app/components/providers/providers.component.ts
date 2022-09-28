import { Provider } from "src/app/models/provider";
import { Component, OnInit } from "@angular/core";
import { ProviderService } from "src/app/services/provider.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "provider-component",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"]
})


export class ProviderComponent implements OnInit {

  provider = {} as Provider
  providers: Provider[] = [];

  constructor(private providerService: ProviderService){};

    ngOnInit() {
      this.getProvider()
    }

  getProvider() {
    this.providerService.getProvider().subscribe({
      next: (providers) => {
        this.providers = providers;
      }
    })
  }


  createProvider(form: NgForm) {
    this.providerService.createProvider(this.provider).subscribe(() => {
      this.updateForm(form)
      })
  }

  updateForm(form: NgForm) {
    this.getProvider();
    form.resetForm();

    this.provider = {} as Provider
  }


}
