import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TemperaturServiceService {
  public apiKey: string = "https://backend.csmk59.de/api/v1/ing/sensor/bme280/data";

  constructor(private httpClient: HttpClient) { }

  getSensorsData(): Observable<any> {
    return this.httpClient.get<any>(this.apiKey)
      .pipe(map((data: any) => {
        return data.data;
    }));
  }
}
