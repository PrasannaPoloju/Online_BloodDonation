import { Component } from '@angular/core';
import { DonorService } from '../donor.service';
import { Donor } from '../donor';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login-donor',
  templateUrl: './login-donor.component.html',
  styleUrls: ['./login-donor.component.css']
})
export class LoginDonorComponent {
  constructor(private donorService : DonorService,private route:Router,private toast: NgToastService){}
  donor=new Donor("",0,0,"","","","","","","","");
  msg = ' ';
  donor_id:any;
  
  public onSubmit(){
    this.donorService.loginDonor(this.donor).subscribe(
      (data:any)=>{
       // alert("login completed");
        console.log(data.donor_id);
        this.toast.success({detail:"SUCCESS",summary:'login successfull', duration:5000});
        this.donor_id=data.donor_id;
        this.route.navigate(['/welcome',this.donor_id]);
      },(err:any)=>{
        this.toast.error({detail:"ERROR",summary:'Invalid Credentials Login Failed',duration:10000 });
  
      }
    );

  }
  

}
