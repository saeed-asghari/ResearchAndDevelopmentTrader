import { Component, OnInit } from '@angular/core';
import { ItemUpdate } from 'lightstreamer-client-web';
import { StockListService } from '../services/stock-list.service.service';

@Component({
  selector: 'app-kendo-lightstreamer',
  templateUrl: './kendo-lightstreamer.component.html',
  styleUrls: ['./kendo-lightstreamer.component.css']
})
export class KendoLightstreamerComponent implements OnInit {
  itemNames= ['item1', 'item2', 'item3'];
    fieldNames = ['stock_name', 'last_price', 'time'];
  constructor(private service: StockListService) {
  }
  
  public gridData = [
    { stock_name: 'Ations Europe' },
    { stock_name: 'Anduct' },
    { stock_name: 'Bagies Consulting' },
  ];
  ngOnInit() {
    this.service.subscribe(this.itemNames, this.fieldNames).addListener({
      onItemUpdate: (obj: ItemUpdate) => {
        const stock_name = obj.getValue('stock_name');
        // have to convert this to a integer
        const last_price =Number(obj.getValue('last_price'));
        const time = obj.getValue('time');
       // const newItem = { stock_name, last_price, time };
        const newData = [           
          { stock_name, last_price, time },
              ];
        this.gridData =  newData 
  
      },
      onSubscriptionError: function (errorCode, errorMessage) {
        //here you can consume the error
        console.log(errorCode + ':' + errorMessage);
      },
    });
  }

}
