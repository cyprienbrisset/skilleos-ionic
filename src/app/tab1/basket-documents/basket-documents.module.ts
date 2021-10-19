import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketDocumentsPageRoutingModule } from './basket-documents-routing.module';

import { BasketDocumentsPage } from './basket-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketDocumentsPageRoutingModule
  ],
  declarations: [BasketDocumentsPage]
})
export class BasketDocumentsPageModule {}
