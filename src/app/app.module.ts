import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowsComponent } from './windows/windows.component';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDockingModule } from 'jqwidgets-ng/jqxdocking';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockListService } from './services/stock-list.service.service';
import { StockListComponent } from './stock-list/stock-list.component';
import { ChangesRowStockComponent } from './changes-row-stock/changes-row-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowsComponent,
    NavbarComponent,
    HomeComponent,
    StockListComponent,
    ChangesRowStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxWindowModule,
    jqxButtonModule,
    jqxDockingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'windows', component: WindowsComponent },
      { path: 'stocklist', component: StockListComponent },
      { path: 'stocklistchanges', component: ChangesRowStockComponent },
    ]),
  ],
  providers: [StockListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
