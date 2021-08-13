import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreeablenessRoutingModule } from './agreeableness-routing.module';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent, BodyComponent],
  imports: [CommonModule, AgreeablenessRoutingModule, SharedModule],
})
export class AgreeablenessModule {}
