import { Component } from '@angular/core';
import { ReceiverService } from '../receiver.service';
import { Router } from '@angular/router';
import { Receiver } from '../receiver';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login-receiver',
  templateUrl: './login-receiver.component.html',
  styleUrls: ['./login-receiver.component.css']
})
export class LoginReceiverComponent {
  constructor(private donorService : ReceiverService,private route:Router,private toast: NgToastService){}
  receiver=new Receiver("",0,"","","","","","","");
  msg = ' ';
  receiver_id:any;

  public onSubmit(){
    this.donorService.loginReceiver(this.receiver).subscribe(
      (data:any)=>{
      //  alert("login completed");
      this.toast.success({detail:"SUCCESS",summary:'login successfull', duration:5000});
        console.log(data.receiver_id);
        this.receiver_id=data.receiver_id;
        this.route.navigate(['/find-donor',this.receiver_id]);
      },(err:any)=>{
        this.toast.error({detail:"ERROR",summary:'Invalid Credentials Login Failed',duration:10000 });
  
      }
    );

  }
}
