import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpennessRoutingModule } from './openness-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, OpennessRoutingModule],
  exports: [MainComponent],
})
export class OpennessModule {}
