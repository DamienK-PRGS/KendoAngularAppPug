import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_GRID, KENDO_GRID_EXCEL_EXPORT, KENDO_GRID_PDF_EXPORT } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { SortDescriptor } from '@progress/kendo-data-query';
import { countries, Country } from "../data/data.countries";
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { CustomersService } from '../services/pasoe.service';
import { images } from "../data/data.images";
import { fileExcelIcon, filePdfIcon, SVGIcon } from '@progress/kendo-svg-icons';



@Component({
  selector: 'app-cust',
  imports: [KENDO_DATEINPUTS,KENDO_GRID, KENDO_DROPDOWNS, KENDO_GRID_EXCEL_EXPORT,KENDO_GRID_PDF_EXPORT],
  providers: [CustomersService],
  styleUrl: './customer.component.css',
  template:`
  <kendo-grid
      [kendoGridBinding]="gridData"
      kendoGridSelectBy="id"
      [loading]="service.loading"
      [pageSize]="15"
      [pageable]="true"
      [sortable]="true"
      [groupable]="true"
      [reorderable]="true"
      [resizable]="true"
      [columnMenu]="{ filter: true }"
      [filterable]="true">
       <ng-template kendoGridToolbarTemplate>      
        <kendo-grid-spacer></kendo-grid-spacer>
        <button kendoGridExcelCommand type="button" [svgIcon]="excelSVG">
          Export to Excel
        </button>
        <button kendoGridPDFCommand [svgIcon]="pdfSVG">Export to PDF</button>
      </ng-template>
      <kendo-grid-column
            field="Country"
            title="Country"
            [width]="200"
            [class]="{ 'text-center': true }"
            [resizable]="false"
          >
            <ng-template kendoGridCellTemplate let-dataItem>
              <img class="flag" [src]="flagURL(dataItem)" [width]="30" />
              <div class="customer-name">{{ dataItem.Country }}</div>
            </ng-template>
          </kendo-grid-column>
      <kendo-grid-column field="CustNum" title="CustNum"> </kendo-grid-column>
      <kendo-grid-column field="Name" title="Name"> </kendo-grid-column>
      <kendo-grid-pdf
        fileName="Customers.pdf"
        [repeatHeaders]="true"
      ></kendo-grid-pdf>
      <kendo-grid-excel fileName="Customers.xlsx"></kendo-grid-excel>
  </kendo-grid>` 
})
export class CustomerComponent {
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;
  public dropDownItems: Country[] = countries;
  public defaultItem: Country = { text: "Filter by Country", value: 0 };
  public title = "Customers"
  public gridData: Observable<Array<any>> | any;
  public pageSize: number = 10;
  public skip: number = 0;
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;


  constructor(public service: CustomersService) {
    this.service.query();
    this.service.subscribe((res) => {      
      this.gridData = res;
    });
  }

public flagURL(dataItem: { Country: string }): string {
  
  const code: string = dataItem.Country;
  const image: { [Key: string]: string } = images;

  return image[code];
}
}
