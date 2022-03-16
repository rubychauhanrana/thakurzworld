import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from '../services/brand.service';
// import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandForm = new FormGroup({
    brand_name: new FormControl(''),
    brand_logo: new FormControl('')
  })

  brandData:any
  base:any
  // images:any

  constructor(private _brandService: BrandService, private toaster: ToastrService, @Inject('base_url') _base:any) { 
    this.base = _base
  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this._brandService.getBrand().subscribe(
      (res:any) =>{
        this.brandData = res.response.brand
      },
      err =>{
        console.log(err)
      }
    )
  }

  fileUpload(event:any){
    console.log(event.target.files[0])
    this.brandForm.patchValue({brand_logo: event.target.files[0]})
  }

  submit(){
    console.log(this.brandForm.value)
    let a = new FormData();
    a.append('brand_name', this.brandForm.value.brand_name)
    a.append('brand_logo', this.brandForm.value.brand_logo)

    this._brandService.addBrand(a).subscribe(
      (res:any) =>{
        console.log(res)
        if (res.status){
          this.toaster.success('Brand added successfully', 'Success')
        }
      },
      err =>{
        console.log(err)
      }
    )
  }

}
