import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private _uploadService: ProductService, private formBuilder: FormBuilder) {
    
  }

  selectImage!: File

  onHandleUpload(event: any) {
    this.selectImage = event.target.files[0]
  }
  uploadForm = this.formBuilder.group({
    image: this.selectImage
  })

  onSubmit() {
    const formData = new FormData();
  formData.append('image', this.selectImage);
    this._uploadService.upload(formData).subscribe(data => {
      console.log(data);
      
    })
  }
}
