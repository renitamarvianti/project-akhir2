import { Component, OnInit } from '@angular/core';
import { KaryawanService } from './karyawan.service';

@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.component.html',
  styleUrls: ['./karyawan.component.css'],
  providers:[KaryawanService],
})
export class KaryawanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
