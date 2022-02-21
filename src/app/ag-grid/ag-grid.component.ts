import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
 // rowData: Observable<any[]>;
 lang : boolean = true;
  constructor(private http: HttpClient) {
  //  this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
}

  ngOnInit(): void {
  }
  columnDefs: ColDef[] = [
    { field: 'سازنده',sortable: true ,filter: true, checkboxSelection: true},
    { field: 'model' ,sortable: true,filter: true },
    { field: 'price',sortable: true ,filter: true }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}
