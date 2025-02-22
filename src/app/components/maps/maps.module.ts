import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UbicationRangeComponent } from './components/ubication-range/ubication-range.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    AngularLogoComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent,
    UbicationRangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MapsModule { }
