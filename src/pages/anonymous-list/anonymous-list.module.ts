import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnonymousListPage } from './anonymous-list';

@NgModule({
  declarations: [
    AnonymousListPage,
  ],
  imports: [
    IonicPageModule.forChild(AnonymousListPage),
  ],
  exports: [
    AnonymousListPage
  ]
})
export class AnonymousListPageModule {}