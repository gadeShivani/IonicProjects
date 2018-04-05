
import { Injectable } from '@angular/core';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {
   public productList: Array<Object>;

  constructor() {
    console.log('Hello MyProvider Provider');

this.productList=[];
  }

addProduct(data){

        this.productList.push({
            name: data.product,
            price: data.price,
            quantity: data.quantity
        });


  }
deleteProduct(name){



       this.productList.splice(this.productList.indexOf(name),1);

  }
  


}
