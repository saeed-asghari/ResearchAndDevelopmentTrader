import { APP_INITIALIZER, NgModule, LOCALE_ID } from '@angular/core';
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
import { I18NEXT_SERVICE, I18NextModule, I18NextLoadResult, ITranslationService, defaultInterpolationFormat  } from 'angular-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import LocizeApi from 'i18next-locize-backend';
import {Material} from "./material.module";
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';

const i18nextOptions = {
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
          "welcome": "Welcome to Your Angular App",
          "desc": "For a guide and recipes on how to configure / customize this project, check out "
      }
  },
  fa: {
      translation: {
          "welcome": "خوش آمدید",
          "desc": "برای راهنمایی و دستور العمل های نحوه پیکربندی/سفارشی کردن این پروژه، را بررسی کنید "
      }
  }
  },
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  }
};

export function appInit(i18next: ITranslationService) {
  return () => {
    let promise: Promise<I18NextLoadResult> = i18next
     // .use(LocizeApi)
      .use<any>(LanguageDetector)
      .init(i18nextOptions);
    return promise;
  };
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  },
];

@NgModule({
  declarations: [
    AppComponent,
    WindowsComponent,
    NavbarComponent,
    HomeComponent,
    StockListComponent,
    ChangesRowStockComponent,
    FormComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxWindowModule,
    jqxButtonModule,
    Material,
    jqxDockingModule,
    I18NextModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'windows', component: WindowsComponent },
      { path: 'stocklist', component: StockListComponent },
      { path: 'stocklistchanges', component: ChangesRowStockComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [I18N_PROVIDERS,StockListService],
  bootstrap: [AppComponent],
})
export class AppModule {}


