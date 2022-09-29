import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "cnpj"})

export class CnpjPipe implements PipeTransform {
    transform(value: string|number) {
      const cnpj = value + "";

      const cnpj_formatted = cnpj
          .replace(/[^0-9]/, "")
          .replace(
              /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
              "$1.$2.$3/$4-$5"
          );

      return cnpj_formatted;
    }


  }

