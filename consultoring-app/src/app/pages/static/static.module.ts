import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { StaticRoutingModule } from './static-routing.module';
import { CompanyModalComponent } from './pages/company-modal/company-modal.component';


@NgModule({
  declarations: [
    CompanyModalComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class StaticModule { }
