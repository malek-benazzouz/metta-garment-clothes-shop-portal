import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

export interface CsvRow {
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class ExportService {

  constructor() {}

  public exportAsCsv(data: CsvRow[], filename: string): void {
    const replacer = (key: any, value: any) => value === null ? '-' : value; // default if value is null
    const header = Object.keys(data[0]);
    let csv = data.map((row: any) => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], { type: 'text/csv' })
    saveAs(blob, `${filename}.csv`);
  }

}
