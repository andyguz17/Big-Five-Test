import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [HeaderComponent, SelectorComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SelectorComponent],
})
export class SharedModule {}
