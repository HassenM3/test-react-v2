import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestReactV2SharedModule } from 'app/shared/shared.module';
import { TestReactV2CoreModule } from 'app/core/core.module';
import { TestReactV2AppRoutingModule } from './app-routing.module';
import { TestReactV2HomeModule } from './home/home.module';
import { TestReactV2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestReactV2SharedModule,
    TestReactV2CoreModule,
    TestReactV2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestReactV2EntityModule,
    TestReactV2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class TestReactV2AppModule {}
