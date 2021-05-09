import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TmAppSwitchComponent } from './components/tm/tm-app-switch/tm-app-switch.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TmMyAccountComponent } from './components/tm/tm-my-account/tm-my-account.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    TmAppSwitchComponent,
    TmMyAccountComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    SharedRoutingModule
  ],
  exports:[TmAppSwitchComponent, TmMyAccountComponent]
})
export class SharedModule { }
