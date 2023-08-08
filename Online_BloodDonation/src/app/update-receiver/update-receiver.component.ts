import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Receiver } from '../receiver';
import { ReceiverService } from '../receiver.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-update-receiver',
  templateUrl: './update-receiver.component.html',
  styleUrls: ['./update-receiver.component.css']
})
export class UpdateReceiverComponent implements OnInit {
  receiver:Receiver;
  receiver_id:any;
  updateData:any;
isEditing: boolean= false;

constructor(private router:Router,private route :ActivatedRoute, private receiverService:ReceiverService){
  this.receiver={
    name: '',
    email: '',
    gender: '',
    age: 0,
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    address: '',
    state: ''
  };
}
  // receiver=new Receiver("",0,"","","","","","","");
  
  // public onSubmit(){
  //   this.receiverService.updateReceiver(this.receiver).subscribe(
  //     (data:any)=>{
  //       this.receiver=data;
  //       alert("data update successfully");
  //       this.route.navigate(['/user']);
  //     }
  //   )
  
  // }
  ngOnInit(): void {
    this.receiver_id=this.route.snapshot.params['receiver_id'];
    this.receiverService.getReceiverById(this.receiver_id).subscribe
     ((data:any)=>this.receiver=data);
    console.log(this.receiver);
  }
  toggleEdit(){
    this.isEditing=!this.isEditing;
  }

  saveCahanges(){
    this.receiverService.updateReceiverProfile(this.receiver_id, this.updateData).subscribe(
      (data)=>{
        this.isEditing = false;
      },
      (error)=>{}
    )
  }
  data(receiver_id:number,data:any){
    throw new Error('Method nor implemented');
  }
updateReceiverProfile():void{
  this.receiverService.updateReceiverProfile(this.receiver_id,this.receiver).subscribe(
    (response:any)=>{
      alert("Profile Updated");
      console.log('Profile Updated ');
      
    },
    (error:any)=>{
      console.error('Error updating profile',error);
    }
  );
}
}
