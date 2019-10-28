import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatListModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule
  ]
})

export class MaterialModule {}
