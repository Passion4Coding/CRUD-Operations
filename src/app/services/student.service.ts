import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  // aa = ""
  configUrl = 'assets/dummyData/dummy.json';

  // userMale=new BehaviorSubject<any>(0);
  // userFemale:any

  public countUpdate= new BehaviorSubject<any>(3);

  public maleCountUpdate= new BehaviorSubject<any>(0);
  public femaleCountUpdate= new BehaviorSubject<any>(0);

  // public walletmoney= new BehaviorSubject<any>(0);
  maleUpadte = this.maleCountUpdate.asObservable()
  femaleUpadte = this.femaleCountUpdate.asObservable()
  countUpdated = this.countUpdate.asObservable()

  
  // ddd = this.userMale.asObservable()
  // userCount:any


  isCountUpdates(data:any) {
    this.countUpdate.next(data);
  }

  maleCount(data:any) {
    this.maleCountUpdate.next(data);
  }

  
  femaleCount(data:any) {
    this.femaleCountUpdate.next(data);
  }


  

  getData(): Observable<any> {
    return this.http.get(this.configUrl)
  }
}
