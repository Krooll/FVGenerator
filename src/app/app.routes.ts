import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {GenerateInvoiceComponent} from "./generate-invoice/generate-invoice.component";
import {FindInvoiceComponent} from "./find-invoice/find-invoice.component";
import {AddInfoComponent} from "./add-info/add-info.component";


const routes: Routes =  [
  { path: '', redirectTo: 'generate-invoice', pathMatch: 'full' },
  { path: 'generate-invoice', component: GenerateInvoiceComponent },
  { path: 'find-invoice', component: FindInvoiceComponent },
  { path: 'add-info', component: AddInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
