import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/Models/product/Product.model';
import { Category } from 'src/app/Models/category/Category.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

const headerOption2 = {
  headers: new HttpHeaders({
    'content-type': 'text'
  })
};

@Injectable()
export class ProductService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/product';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/pcategory';

  dataUrl3 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/productwithcatname';


  currentProduct: Product = new Product();
  panelOpenState = false;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl, headerOption);
  }

  getAllProductAndCategory():Observable<Object[]>{
    return this.http.get<Object[]>(this.dataUrl3, headerOption);
  }

  getAllCategoryName(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl2+'/catnamelist', headerOption);
  }

  deleteProduct(pid: number): Observable<Product> {
    return this.http.delete<Product>(this.dataUrl + '/' + pid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.dataUrl, product, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.dataUrl + '/' + product.pid, product, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}

