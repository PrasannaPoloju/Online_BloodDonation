package com.edubridge.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name="receivertable")
public class Receiver {
	@Id
	@GeneratedValue(generator="cat_seq")
	@SequenceGenerator(name="cat_seq",sequenceName="cat_seq", allocationSize=1,initialValue=1000)

	private Long receiver_id;
	@NotEmpty
	@Size(min=3 , message="first name must contain atleast 5 characters")
	@Column(name="user_name", length = 60)
	private String name;
	@NotEmpty
	@Email(message="email is not valid")
	@Column(name="email", length=60  )
	private String email;
	@NotEmpty
	@Size(min=8 , message="password must contain atleast 8 characters")
	@Pattern(regexp="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
	@Column(name="password", length=60  )
	private String password;
	@NotEmpty
	@Column(name="confirm_password", length=60  )
	private String confirmPassword;
	@NotEmpty 
	@Size(min=10 , message="mobile number must contain atleast 10 characters")
	@Column(name="mobile_number", length=10 ,unique=true )
	private String mobileNumber;
	@NotEmpty 
	@Column(name="address" )
	private String address;
	@NotEmpty 
	@Column(name="state" )
	private String state;
	
	
	@Column(name="gender" )
	private String gender;
	
	@Column(name="age" )
	private int age;
	
	
	public Receiver() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Receiver(Long receiver_id,
			@NotEmpty @Size(min = 3, message = "first name must contain atleast 5 characters") String name,
			@NotEmpty @Email(message = "email is not valid") String email,
			@NotEmpty @Size(min = 8, message = "password must contain atleast 8 characters") @Pattern(regexp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}") String password,
			@NotEmpty @Size(min = 10, message = "mobile number must contain atleast 10 characters") String mobileNumber,
			@NotEmpty String address,@NotEmpty String gender, @NotEmpty int age,
			String state,String confirmPassword) {
		super();
		this.receiver_id = receiver_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.address = address;
		
		this.gender = gender;
		this.age = age;
		
		this.state=state;
		this.confirmPassword=confirmPassword;
	}
	public Long getReceiver_id() {
		return receiver_id;
	}
	public void setReceiver_id(Long receiver_id) {
		this.receiver_id = receiver_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

}
