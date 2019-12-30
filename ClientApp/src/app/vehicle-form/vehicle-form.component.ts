import { Feature } from "./../services/feature.model";
import { Component, OnInit } from "@angular/core";

import { VehicleService } from "../services/vehicle.service";
import { Make } from "../services/make.model";
import { Model } from "../services/model.model";

@Component({
  selector: "app-vehicle-form",
  templateUrl: "./vehicle-form.component.html",
  styleUrls: ["./vehicle-form.component.css"]
})
export class VehicleFormComponent implements OnInit {
  makes: Make[];
  models: Model[];
  features: Feature[];
  vehicle: any = {};

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(data => {
      this.makes = data;
    });

    this.vehicleService.getFeatures().subscribe(data => {
      this.features = data;
    });
  }

  onMakeChange() {
    let selectedMake = this.makes.find(make => make.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
