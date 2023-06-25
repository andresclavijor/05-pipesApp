import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByGeneric',
})
export class SortByGenericPipe implements PipeTransform {
  private isAscending?: boolean = true;

  transform<T>(value: T[], sortBy: keyof T | undefined | '' | null): T[] {
    if (!sortBy) return value;
    const sortedArray = [...value]; // Crear una copia del array original

    sortedArray.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return this.isAscending ? 1 : -1;
      } else if (a[sortBy] < b[sortBy]) {
        return this.isAscending ? -1 : 1;
      } else {
        return 0;
      }
    });

    // Verifica ordenamiento anterior y lo cambia al siguiente
    if (this.isAscending === true) {
      this.isAscending = false;
      return sortedArray;
    } else if (this.isAscending === false) {
      this.isAscending = undefined;
      return sortedArray;
    } else {
      this.isAscending = true;
      return value;
    }
  }
}
