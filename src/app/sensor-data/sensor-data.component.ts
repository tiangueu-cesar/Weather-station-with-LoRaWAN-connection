import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';
import { TemperaturServiceService } from "../temperatur-service.service";
import { HttpErrorResponse } from "@angular/common/http";
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})

export class SensorDataComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge: GaugeComponent;
  public sensorsData: any;
  subscription: Subscription;
  source = interval(6000);

  constructor(private temperaturService: TemperaturServiceService) {}

  ngOnInit() {
    this.subscription = this.source.subscribe(val => this.getSensorsData());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {}

  public getSensorsData(): void {
    this.temperaturService.getSensorsData().subscribe(
      (response: any) => {
        this.sensorsData = response;
        console.log(response.press);
      }, (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }

}
