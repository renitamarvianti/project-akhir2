import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KaryawanService } from '../karyawan.service';

@Component({
  selector: 'app-karyawan-edit',
  templateUrl: './karyawan-edit.component.html',
  styleUrls: ['./karyawan-edit.component.css']
})
export class KaryawanEditComponent implements OnInit {
id:number;
editMode=false;
karyawanForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private karyawanService: KaryawanService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
        // console.log(this.editMode);
      }
    )
  }

  onSubmit(){
    // console.log(this.karyawanForm);
    // const newKaryawan = new Karyawan(
    //   this.karyawanForm.value['name'], 
    //   this.karyawanForm.value['imagePath'],
    //   this.karyawanForm.value['position'],
    //   this.karyawanForm.value['address'],
    //   this.karyawanForm.value['notelp'],
    //   this.karyawanForm.value['salary']);
    if(this.editMode){
      this.karyawanService.updateKaryawan(this.id, this.karyawanForm.value);
    } else {
      this.karyawanService.addKaryawan(this.karyawanForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let karyawanName = '';
    let karyawanImagePath = '';
    let karyawanPosision = '';
    let karyawanAddress = '';
    let karyawanNoTelp = '';
    let karyawanSalary = '';

    if(this.editMode){
      const karyawan = this.karyawanService.getKaryawan(this.id);
      karyawanName = karyawan.name;
      karyawanImagePath = karyawan.imagePath;
      karyawanPosision = karyawan.position;
      karyawanAddress = karyawan.address;
      karyawanNoTelp = karyawan.notelp;
      karyawanSalary = karyawan.salary;
    }

    this.karyawanForm = new FormGroup({
      'name': new FormControl(karyawanName, Validators.required),
      'imagePath': new FormControl(karyawanImagePath, Validators.required),
      'position': new FormControl(karyawanPosision, Validators.required),
      'address': new FormControl(karyawanAddress, Validators.required),
      'notelp': new FormControl(karyawanNoTelp, Validators.required),
      'salary': new FormControl(karyawanSalary, Validators.required)
    });
  }

}
