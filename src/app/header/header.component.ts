import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStrorageService: DataStorageService) { }
// @Output() featureSelected=new EventEmitter<string>();

// onSelect(feature:string){
//   this.featureSelected.emit(feature);
// }
  
  onSaveData(){
    this.dataStrorageService.storeKaryawans()
    .subscribe(
      (Response: Response)=>{
        console.log(Response);
      }
    );
  }

  onFetchData(){
    this.dataStrorageService.getKaryawans();
  }

  ngOnInit() {
  }

}
