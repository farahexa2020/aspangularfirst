import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Make } from "./make.model";
import { Feature } from "./feature.model";

@Injectable({ providedIn: "root" })
export class VehicleService {
  constructor(private http: HttpClient) {}

  getMakes() {
    return this.http.get<Make[]>("api/makes");
  }

  public getFeatures() {
    return this.http.get<Feature[]>("api/features");
  }
}
