import { Injectable } from '@angular/core';
import { Donor } from './donor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
myurl="http://localhost:8086/donor/se";
  url="http://localhost:8086/donor";
  gall="http://localhost:8086/donor/all";
  updateurl="http://localhost:8086/donor";
  
 geturl= "http://localhost:8086/donor/getDonor";
  constructor(private httpclient:HttpClient) { }
  public registerDonor(donor:Donor){
    return this.httpclient.post('http://localhost:8086/donor/create',donor);
  }
  public loginDonor(donor:Donor){
    return this.httpclient.post('http://localhost:8086/donor/login',donor)
  }

  public deleteDonor(donor_id: any){
    return this.httpclient.delete<any>(`${this.url}/${donor_id}`);
  }


  public getAllDonors()
  {
return this.httpclient.get("http://localhost:8086/donor/all");
  }
public findDonor(bloodGroup: string, address: string){
  return this.httpclient.get<any>(`http://localhost:8086/donor/find?bloodGroup=${bloodGroup}&address=${address}`);
}
getDonors(page: number){
  return this.httpclient.get(this.gall + '?page=' + page);
}

updateDonorProfile(donor_id: number, updatedData: any): Observable<any> {
  //const url = `${this.apiUrl}/:donor_id`; 
  return this.httpclient.put<any>(`${this.updateurl}/${donor_id}`, updatedData);
}


 public getDonorsByBloodGroupAndAddress( address: string,bloodGroup: string )  {
   return this.httpclient.get<any>(`${this.myurl}/${address}/${bloodGroup}`);
  }



  public getDonorById(donor_id: string){
    return this.httpclient.get<any>(`${this.geturl}/${donor_id}`);
    
  }

}
  
