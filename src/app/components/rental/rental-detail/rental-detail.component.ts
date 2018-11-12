import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../_shared/rental.model';
import { RentalService } from '../_shared/rental.service';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor(private routes: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getRental(params['id']);
    });
  }

  getRental(id) {
    this.rentalService.getOne(id)
      .subscribe((rental: Rental) => this.rental = rental);
  }

}
