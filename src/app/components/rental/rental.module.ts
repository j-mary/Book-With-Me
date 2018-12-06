import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalService } from './_shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../common/map/map.module';

const routes: Routes = [
  {
    path: 'rentals', component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent },
      { path: ':id', component: RentalDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MapModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
