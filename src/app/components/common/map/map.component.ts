import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() location: string;

  lat: number;
  lng: number;
  isPositionError: boolean = false;

  constructor(
    private mapService: MapService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  getLocation(location) {
    this.mapService.getGeoLocation(location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
      });
  }

  mapReadyHandler() {
    this.getLocation(this.location);
  }

}
