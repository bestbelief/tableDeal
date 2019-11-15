import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDealComponent } from './table-deal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PaginationModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { TableDealRoutingModule } from './table-deal-routing.module';


@NgModule({
  declarations: [TableDealComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableDealRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule
  ]
})
export class TableDealModule { }
