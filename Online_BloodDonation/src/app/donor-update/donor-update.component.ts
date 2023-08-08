
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donor-update',
  templateUrl: './donor-update.component.html',
  styleUrls: ['./donor-update.component.css']
})
export class DonorUpdateComponent implements OnInit{
  donor:Donor;
  donor_id:any;
  updatedData: any;
  isEditing: boolean = false;

  constructor(private router:Router, private route: ActivatedRoute,private donorService: DonorService){
    this.donor ={
      name: '',
      email: '',
      bloodGroup: '',
      gender: '',
      age: 0,
       weight: 0,
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      address: '',
      state: ''
    };
  }


   ngOnInit(): void {
    this.donor_id = this.route.snapshot.params['donor_id']; 
   this.donorService.getDonorById(this.donor_id).subscribe
   ((data: any) => this.donor=data);

   console.log(this.donor);

   }

toggleEdit(){
  this.isEditing =!this.isEditing;
}


   saveChanges(){
    this.donorService.updateDonorProfile(this.donor_id, this. updatedData).subscribe(
      (data)=>{
        this.isEditing = false;
      },
      (error)=>{}
    )
   }
  data(donor_id: number, data: any) {
    throw new Error('Method not implemented.');
  }


   updateDonorProfile(): void{
    
   this.donorService.updateDonorProfile(this.donor_id,this.donor).subscribe(
      (response:any) => {
        alert("Profile updated successfully!");
       console.log('Profile updated successfully!'); 
       this.router.navigate(['/welcome',this.donor_id]);
    },
       (error: any) => {
        console.error('Error updating profile:', error);
      }
    );

    }
  }
 
  



