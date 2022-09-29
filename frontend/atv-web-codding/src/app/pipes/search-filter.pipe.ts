import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchPipe"
})

export class SearchFilterPipe implements PipeTransform {
  transform(list: Array<any>, key: String) {
    if(key) {
      return list.filter(i => i.name.indexOf(key) >= 0)
    } else {
      return list
    }
  }
}
