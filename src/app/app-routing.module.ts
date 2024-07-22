import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { CollectionsComponent } from './collections/collections.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/illustrations', pathMatch: 'full' },
      { path: 'illustrations', component: IllustrationsComponent }
    ]
  },
  {
    path: 'collections',
    component: SimpleLayoutComponent,
    children: [
      { path: '', component: CollectionsComponent }
    ]
  },
  { path: '**', redirectTo: '/illustrations' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IllustrationsComponent, CollectionsComponent];
