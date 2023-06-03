import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {FormBuilder} from '@angular/forms'
import { Product } from 'src/app/interface/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {

  }

  img!: any

  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [0],
    flavor: [''],
    description: [''],
    note: [''],
    categoryId: [''],
  })

  handleImageUpload(event: any) {
    
    const file = event.target.files[0];
    
    const reader = new FileReader();
        reader.readAsDataURL(file);
    reader.onloadend = () => {
          this.img = reader.result
          
        }
    // this.productForm.get('productImage').setValue(file);
  }

  onSubmit() {
    const product:Product = {
    name: this.productForm.value.name || '',
    image: this.img || undefined,
    price: this.productForm.value.price || 0,
    flavor: this.productForm.value.flavor || '',
    description: this.productForm.value.description || '',
    note: this.productForm.value.note || '',
    categoryId: this.productForm.value.categoryId || '',
    }
    
    
    console.log(product);
    
    
    this.productService.addProduct(product).subscribe((product) => {
      console.log('product', product);
    })
  }
}
