import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDealComponent } from './table-deal.component';

const routes: Routes = [
    {
        path: '', component: TableDealComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableDealRoutingModule {
}
