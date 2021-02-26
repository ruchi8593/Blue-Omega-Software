import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { BlueomegaadminServiceService } from './blueomegaadmin-service.service';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    FooterComponent,
    NavbarComponent,
    MembersComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'projects/:projectid',
        component: HomepageComponent
      },
      {
        path: 'members/:memberid',
        component: MembersComponent
      }

    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    BlueomegaadminServiceService
  ],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
