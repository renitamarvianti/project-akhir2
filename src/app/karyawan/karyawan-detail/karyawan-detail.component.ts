import { Component, OnInit, Input } from '@angular/core';
import { Karyawan } from '../karyawan.model';
import { KaryawanService } from '../karyawan.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-karyawan-detail',
  templateUrl: './karyawan-detail.component.html',
  styleUrls: ['./karyawan-detail.component.css']
})
export class KaryawanDetailComponent implements OnInit {
//@Input() karyawan:Karyawan;
karyawan:Karyawan;
id:number;
  constructor(private karyawanService:KaryawanService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.karyawan=this.karyawanService.getKaryawan(this.id);
      }
    )
  }

  onEditKaryawan(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteKaryawan(){
    this.karyawanService.deleteKaryawan(this.id);
    this.router.navigate(['/karyawans']);
  }
}
