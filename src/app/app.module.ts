import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { RentalComponent } from './components/rental/rental.component';

import { RentalModule } from './components/rental/rental.module';
import { MapService } from './components/common/map/map.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rentals' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
