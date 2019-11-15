import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
           { path: '', redirectTo: 'tableView' },
           { path: 'tableView', loadChildren: './table-view/table-view.module#TableViewModule' },
           {path: 'tableDeal', loadChildren: './table-deal/table-deal.module#TableDealModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
