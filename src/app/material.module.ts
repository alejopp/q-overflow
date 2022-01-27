
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule
  ];
  
  @NgModule({
    imports: modules,
    exports: modules
  })
  export class MaterialModule {}