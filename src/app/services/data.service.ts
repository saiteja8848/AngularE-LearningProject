import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private validUser:boolean;

    constructor() { }
  
    setValidUser(status:boolean){
        this.validUser=status;
    }

    getValidUser(){
      return this.validUser;
    }

    validateCreditionals(creditionals:any){
      if(creditionals.mailId=="admin"&&creditionals.password=="admin"){
        this.setValidUser(true);
      } else
       this.setValidUser(false);
       return this.validUser;    
    }

}
