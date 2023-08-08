import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';


@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']

})
export class RegisterDonorComponent {
  
  constructor(private donorService : DonorService,private route:Router){}
  donor=new Donor("",0,0,"","","","","","","","");
  msg = ' ';
  donor_id:any;
  
  public onSubmit(){
    console.log(this.donor);
    this.donorService.registerDonor(this.donor).subscribe(
      (data:any)=>{
        alert("Registration Completed You Get Call from Receiver Soon");
        //this.route.navigate(['/home']);
        // this.route.navigate(['/loginDonor']);
         console.log(data.donor_id);
         this.donor_id=data.donor_id;
         this.route.navigate(['/welcome',this.donor_id]);
      }
    );
  
  }
  

}
