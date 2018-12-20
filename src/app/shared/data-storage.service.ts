import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { KaryawanService } from "../karyawan/karyawan.service";
import { Karyawan } from "../karyawan/karyawan.model";
import 'rxjs/add/operator/map'

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private karyawanService: KaryawanService){}

    storeKaryawans(){
        return this.http.put('https://ng-karyawan-new.firebaseio.com/.json', this.karyawanService.getKaryawans());
    }

    getKaryawans(){
        this.http.get('https://ng-karyawan-new.firebaseio.com/.json')
        .map(
            (response: Response)=>{
                const karyawans: Karyawan[] = response.json();
                for(let karyawan of karyawans){
                }
                return karyawans;
            }
        )
            .subscribe(
                (karyawans: Karyawan[])=>{
                    this.karyawanService.setKaryawans(karyawans);
                }
            );
    }
}