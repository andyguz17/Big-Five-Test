import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectorComponent } from './selector/selector.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [HeaderComponent, SelectorComponent, PanelComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SelectorComponent, PanelComponent],
})
export class SharedModule {}
