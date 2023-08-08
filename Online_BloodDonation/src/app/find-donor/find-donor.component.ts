import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { Router } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Receiver } from '../receiver';
import { ReceiverService } from '../receiver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-donor',
  templateUrl: './find-donor.component.html',
  styleUrls: ['./find-donor.component.css'],
  
})
export class FindDonorComponent implements OnInit{
  donorList:any;
  receiver_id:any;

  Date1 : Date = new Date();
  constructor(private reciverService: ReceiverService ,private donorService : DonorService,private route:Router,private activatedrout:ActivatedRoute){}
  donor=new Donor("",0,0,"","","","","","","","");
  msg = ' ';
  
 bloodGroup: any;
  address: any;
  ngOnInit(): void {
    this.receiver_id = this.activatedrout.snapshot.params['receiver_id'];
  }
  public updateReceiver(){
    this.route.navigate(['/updateReceiver',this.receiver_id]);
  }

  findDonor() {
    
    const matchedDonors = this.donorService.getDonorsByBloodGroupAndAddress(this.address,this.bloodGroup ).subscribe(
      (data:any)=>{
        console.log(data);
        this.donorList=data;
      },err=>{
        alert("we are sorry to say this  'no donor found'");
      }
    )
    
  }
 


  deleteReceiver(){
    
    this.reciverService.deleteReceiver(this.receiver_id).subscribe(
      (resp)=>{
        console.log(resp);
        alert("Receiver Deleted");
        this.route.navigate(['/home']);
      },
      (err)=> console.log(err)
    );
  }


}