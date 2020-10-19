import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CanvasComponent } from './canvas.component';
import { MenuComponent } from './menu/menu.component';
import { FabricComponent } from './fabric/fabric.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    CanvasComponent,
    MenuComponent,
    FabricComponent,
  ],
  entryComponents: [],
  providers: [],
})
export class CanvasModule { }
