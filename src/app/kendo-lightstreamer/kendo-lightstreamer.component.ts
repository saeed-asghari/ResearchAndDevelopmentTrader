import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, RowClassArgs } from '@progress/kendo-angular-grid';
import { ItemUpdate } from 'lightstreamer-client-web';
import { StockListService } from '../services/stock-list.service.service';

@Component({
  selector: 'app-kendo-lightstreamer',
  templateUrl: './kendo-lightstreamer.component.html',
  styles: [
    `
      .k-grid tr.even {
        background-color: #f45c42;
      }
      .k-grid tr.odd {
        background-color: #41f4df;
      }
    `,
  ],
  styleUrls: ['./kendo-lightstreamer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class KendoLightstreamerComponent implements OnInit {
  itemNames = ['item1', 'item2', 'item3'];
  fieldNames = ['stock_name', 'last_price', 'time'];
  constructor(private service: StockListService) {}
  gridData!: any[];
  
  //  gridData = [
  //   { stock_name: 'Ations Europe' },
  //   { stock_name: 'Anduct' },
  //   { stock_name: 'Bagies Consulting' },
  // ];
  test = [
    { last_price: 16.2, stock_name: 'Ations Europe', time: '11:19:48' },
    { last_price: 16.2, stock_name: 'Ations Europe', time: '11:19:48' },
  ];

  ngOnInit() {
    this.service.subscribe(this.itemNames, this.fieldNames).addListener({
      onItemUpdate: (obj: ItemUpdate) => {
        const stock_name = obj.getValue('stock_name');
        // have to convert this to a integer
        const last_price = Number(obj.getValue('last_price'));
        const time = obj.getValue('time');
        // const newItem = { stock_name, last_price, time };
        const newData = [{ stock_name, last_price, time }];
        // this.gridData.transport({ update: [newData] })
        this.gridData = newData;
      },
      onSubscriptionError: function (errorCode, errorMessage) {
        //here you can consume the error
        console.log(errorCode + ':' + errorMessage);
      },
    });
    // setInterval(() => {

    //   this.gridData = this.test
    // }, 200);
  }

  public rowCallback = (context: RowClassArgs) => {
    console.log(this);
    const isEven = context.index % 2 == 0;
    return {
      even: isEven,
      odd: !isEven,
    };
  };
}
