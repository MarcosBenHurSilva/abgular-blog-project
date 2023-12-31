import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent
  ],
  exports: [
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent
  ]
})
export class BlogModule { }
