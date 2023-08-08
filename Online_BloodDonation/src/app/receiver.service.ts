import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receiver } from './receiver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private httpclient:HttpClient) { }
  private url="http://localhost:8086/receiver";
  public registerReceiver(receiver:Receiver){
    return this.httpclient.post('http://localhost:8086/receiver/create',receiver);
  }
  public loginReceiver(receiver:Receiver){
    return this.httpclient.post('http://localhost:8086/receiver/login',receiver)
  }
  public updateReceiver(receiver:Receiver){
   
      return this.httpclient.put(`${this.url}/`,receiver);
    
  }
  updateReceiverProfile(receiver_id:number, updateData:any ):Observable<any>{
    return this.httpclient.put<any>(`${this.url}/${receiver_id}`, updateData);
  }
  
  
  public getReceiverById(receiver_id:string){
    return this.httpclient.get<any>(`${this.url}/${receiver_id}`);
    
  }
  public deleteReceiver(receiver_id: any){
    return this.httpclient.delete<any>(`${this.url}/${receiver_id}`);
  }
 
}
