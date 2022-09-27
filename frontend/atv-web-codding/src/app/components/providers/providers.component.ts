import { Provider } from "src/app/models/provider";
import { Component, OnInit } from "@angular/core";
import { ProviderService } from "src/app/services/provider.service";

@Component({
  selector: "provider-component",
  templateUrl: "./providers.component.html"
})


export class ProviderComponent implements OnInit {
  
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

}
