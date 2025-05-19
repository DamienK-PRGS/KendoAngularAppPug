import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_GRID, KENDO_GRID_EXCEL_EXPORT, KENDO_GRID_PDF_EXPORT } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SortDescriptor } from '@progress/kendo-data-query';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { EmployeesService } from '../services/pasoe.service';
import { SVGIcon, fileExcelIcon, filePdfIcon } from "@progress/kendo-svg-icons";


@Component({
  selector: 'app-emp',
  imports: [KENDO_GRID, CommonModule, KENDO_DROPDOWNS,KENDO_GRID_PDF_EXPORT,KENDO_GRID_EXCEL_EXPORT],
  providers: [EmployeesService],
  styleUrl: './employee.component.css',
  template:`
    <kendo-grid
        [kendoGridBinding]="gridData"
        [loading]="service.loading"
        [pageSize]="60"
        [pageable]="true"
        [sortable]="true"
        [filterable]="true"
        [groupable]="true"
        [gridResizable]="true"
        >
        <ng-template kendoGridToolbarTemplate>
        <kendo-grid-spacer></kendo-grid-spacer>
        <button kendoGridExcelCommand type="button" [svgIcon]="excelSVG">
          Export to Excel
        </button>
        <button kendoGridPDFCommand [svgIcon]="pdfSVG">Export to PDF</button>
      </ng-template>
        <kendo-grid-column field="LastName" title="Last name" [width]="220">
            <ng-template kendoGridCellTemplate let-dataItem>
              <div
                class="employee-photo"
                [ngStyle]="{ 'background-image': photoURL(dataItem.EmpNum) }"
              ></div>
              <div class="employee-name">{{ dataItem.LastName }}</div>
            </ng-template>
          </kendo-grid-column>
        <kendo-grid-column field="FirstName" title="First name"> </kendo-grid-column>
        <kendo-grid-column field="City" title="City"> </kendo-grid-column>
        <kendo-grid-column field="State" title="State"> </kendo-grid-column>
        <kendo-grid-column field="DepartmentName" title="Department"> </kendo-grid-column>
        <kendo-grid-pdf
        fileName="Employees.pdf"
        [repeatHeaders]="true"
      ></kendo-grid-pdf>
      <kendo-grid-excel fileName="Employees.xlsx"></kendo-grid-excel>
    </kendo-grid>
    `
})

export class EmployeeComponent {
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;
  public title = "Employees"
  public gridData: Observable<Array<any>> | any;
  public loading : any;
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;


  constructor(public service: EmployeesService) {
    this.service.query();
    this.service.subscribe((res) => {
      this.gridData = res;
    });

  }

public photoURL(EmpNum :any): string {
  const imageUrl =  `https://pugfr2025-1.westeurope.cloudapp.azure.com:8811/web/hr/employees/${EmpNum}/profilepic`;

  return `url(${imageUrl})`;
}
}
