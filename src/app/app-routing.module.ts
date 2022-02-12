import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageinfoComponent } from './components/pageinfo/pageinfo.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:query',
    component: HomeComponent,
  },
  {
    path: 'region/:region',
    component: HomeComponent,
  },
  {
    path: 'country/:name',
    component: PageinfoComponent,
  },
  {
    path: '**',
    component: Page404Component,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
