import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

const material = [
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule,
  MatListModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
