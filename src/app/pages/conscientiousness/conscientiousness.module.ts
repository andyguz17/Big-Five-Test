import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConscientiousnessRoutingModule } from './conscientiousness-routing.module';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent, BodyComponent],
  imports: [CommonModule, ConscientiousnessRoutingModule, SharedModule],
})
export class ConscientiousnessModule {}
