import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Karyawan } from '../karyawan/karyawan.model';


@Injectable({
  providedIn: 'root'
})
export class KaryawanService {
  karyawansChanged=new Subject<Karyawan[]>();

  karyawans:Karyawan[]=[
    new Karyawan('../src/app/img/ina.jpg','Renita Marvianti Dwi Kusuma','Manager','Karangploso','083833823615','10.000.000'),
    new Karyawan('../src/app/img/ina2.jpg','Novita Rahma Sari','Manager','Dinoyo','083833823615','10.000.000'),
  ];
constructor() { }

setKaryawans(karyawans: Karyawan[]){
  this.karyawans=karyawans;
}

getKaryawans(){
  return this.karyawans.slice();
}

getKaryawan(index:number){
  return this.karyawans[index];
}

addKaryawan(karyawan: Karyawan){
  this.karyawans.push(karyawan);
  this.karyawansChanged.next(this.karyawans.slice());
}

updateKaryawan(index: number, newKaryawan: Karyawan){
  this.karyawans[index]=newKaryawan;
  this.karyawansChanged.next(this.karyawans.slice());
}

deleteKaryawan(index: number){
  this.karyawans.splice(index, 1);
  this.karyawansChanged.next(this.karyawans.slice());
}
}
