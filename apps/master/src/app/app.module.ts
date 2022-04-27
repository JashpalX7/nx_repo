import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { AppComponent } from './app.component';
import { HeaderModule } from '@xt-hub/shared/header';
import { SidebarModule } from '@xt-hub/shared/sidebar';
import { MaterialModule } from '@xt-hub/shared/material';

const routes: Routes = [
  {
    path: 'task-management',
    loadChildren: () =>
      loadRemoteModule('task-management', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'on-boarding',
    loadChildren: () =>
      loadRemoteModule('on-boarding', './Module').then(
        (m) => m.RemoteEntryModule
      ),
      //  canActivate: [AuthGuard],
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: PagenotfoundComponent,
  // },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    // MaterialModule,
    HeaderModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
