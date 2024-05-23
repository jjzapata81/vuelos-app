import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { HelpRoutingModule } from './help-rounting.module';
import { HelpComponent } from './pages/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { MainCategoryComponent } from './components/main-category/main-category.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainCategoryCardComponent } from './controls/main-category-card/main-category-card.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HelpComponent,
    HeaderComponent,
    BannerComponent,
    MainCategoryComponent,
    MainCategoryCardComponent,
    ChatComponent,
    PqrsComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    ReactiveFormsModule
  ]
})
export class HelpModule { }
