import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "cpf"})

export class CpfPipe implements PipeTransform {
    transform(value: string|number) {
      const cpf = value + "";

      const cpf_formatted = cpf
          .replace(/[^0-9]/, "")
          .replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
          );

      return cpf_formatted;
    }


  }

