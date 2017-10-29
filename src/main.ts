import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { CustomerInfoComponent } from './app/invoice-details/customer-info/customer-info.component';

@NgModule({
  exports: [
    CdkTableModule,
    
  ]
})
export class MagicMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MagicMaterialModule,
 
    ReactiveFormsModule,
  ],
  declarations: [CustomerInfoComponent],
  bootstrap: [CustomerInfoComponent],
  providers: []
})
export class MagicAppModule {}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
