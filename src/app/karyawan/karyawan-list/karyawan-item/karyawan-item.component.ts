import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Karyawan } from '../../karyawan.model';
import { KaryawanService } from '../../karyawan.service';

@Component({
  selector: 'app-karyawan-item',
  templateUrl: './karyawan-item.component.html',
  styleUrls: ['./karyawan-item.component.css']
})
export class KaryawanItemComponent implements OnInit {

  @Input() karyawan:Karyawan;
  @Input() index:number;
  // @Output() karyawanSelected=new EventEmitter<void>();
  // constructor(private karyawanService:KaryawanService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   // this.karyawanSelected.emit();
  //   this.karyawanService.karyawanSelected.emit(this.karyawan);
  // }
}
