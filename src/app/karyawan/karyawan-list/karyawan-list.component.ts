import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Karyawan } from '../karyawan.model';
import { KaryawanService } from '../karyawan.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-karyawan-list',
  templateUrl: './karyawan-list.component.html',
  styleUrls: ['./karyawan-list.component.css']
})
export class KaryawanListComponent implements OnInit {
  // @Output() karyawanWasSelected=new EventEmitter<Karyawan>();
  karyawans:Karyawan[];

  constructor(private karyawanService:KaryawanService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(){
    this.karyawanService.karyawansChanged
    .subscribe(
      (karyawans: Karyawan[])=>{
        this.karyawans=karyawans;
      }
    );
    this.karyawans = this.karyawanService.getKaryawans();
  }

  // onKaryawanSelected(karyawan:Karyawan){
  //   this.karyawanWasSelected.emit(karyawan);
  // }
  onNewKaryawan(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
