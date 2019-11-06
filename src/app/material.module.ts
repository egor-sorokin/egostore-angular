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
  MatRadioModule,
  MatFormFieldModule,
  MatStepperModule
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
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule
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
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule
  ]
})

export class MaterialModule {}
