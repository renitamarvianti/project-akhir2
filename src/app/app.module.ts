import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { KaryawanStartComponent } from './karyawan/karyawan-start/karyawan-start.component'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KaryawanComponent } from './karyawan/karyawan.component';

import { KaryawanListComponent } from "./karyawan/karyawan-list/karyawan-list.component";
import { KaryawanDetailComponent } from "./karyawan/karyawan-detail/karyawan-detail.component";

import { KaryawanItemComponent } from "./karyawan/karyawan-list/karyawan-item/karyawan-item.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { KaryawanEditComponent } from './karyawan/karyawan-edit/karyawan-edit.component';
import { KaryawanService } from './karyawan/karyawan.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KaryawanComponent,
    KaryawanStartComponent,

    KaryawanListComponent,
    KaryawanDetailComponent,

    KaryawanItemComponent,

    DropdownDirective,
    KaryawanEditComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [KaryawanService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
