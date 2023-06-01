import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  addProduct(product: any): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/products`, product)
  }
  upload(file: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/upload`, file)

  }
}
