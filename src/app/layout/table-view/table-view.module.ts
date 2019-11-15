import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PaginationModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { TableViewRoutingModule } from './table-view-routing.module';


@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableViewRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule
  ]
})
export class TableViewModule { }
