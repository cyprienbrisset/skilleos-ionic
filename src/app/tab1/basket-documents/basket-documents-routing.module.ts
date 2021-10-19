import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketDocumentsPage } from './basket-documents.page';

const routes: Routes = [
  {
    path: '',
    component: BasketDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketDocumentsPageRoutingModule {}
