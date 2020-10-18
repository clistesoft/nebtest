import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbMenuModule,
  NbIconModule,
  NbIconLibraries,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CanvasModule } from './canvas/canvas.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CanvasModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {
  // constructor(iconsLibrary: NbIconLibraries) {
  //   iconsLibrary.registerSvgPack('bord', {
  //     marker: '<img src='../../assets/marker.svg'>',
  //   });
  // }
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('bord', {
          'marker': '<img src="../../assets/marker.svg">',
    });
  }

}
