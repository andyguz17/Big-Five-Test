import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeuroticismRoutingModule } from './neuroticism-routing.module';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent, BodyComponent],
  imports: [CommonModule, NeuroticismRoutingModule, SharedModule],
})
export class NeuroticismModule {}
