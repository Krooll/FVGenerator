import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FindInvoiceComponent} from "./find-invoice/find-invoice.component";
import {GenerateInvoiceComponent} from "./generate-invoice/generate-invoice.component";
import {AddInfoComponent} from "./add-info/add-info.component";
import {AppRoutingModule} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    FindInvoiceComponent,
    GenerateInvoiceComponent,
    AddInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],

  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
