 package com.edubridge;

import static org.junit.jupiter.api.Assertions.*;


import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.edubridge.entity.Donor;
import com.edubridge.service.DonorService;
@SpringBootTest

class DonorTestCase {

	@Autowired
	private DonorService donorService;
 static	Donor donor =null;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		donor = new Donor();
		donor.setName("Rahul");
		donor.setEmail("rahul@gmail.com");
		donor.setPassword("Rahul@123");
		donor.setMobileNumber("9874561235");
		donor.setAddress("Bhopal");
		donor.setBloodGroup("O+");
		donor.setGender("Male");
		donor.setAge(46);
		donor.setWeight(55);
		donor.setState("MP");
		donor.setConfirmPassword("Rahul@123");
		
		
				
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}
	
	@BeforeEach
	void setUp() throws Exception {
		
	}

	@AfterEach
	void tearDown() throws Exception {
	}
@Disabled
	@Test
	void testRegisterDonor() {
		assertNotNull(donorService.save(donor));
	}
@Test
void testGetDonorById() {
	assertNotNull(donorService.findById(1010l));
	
}
@Test
void testGetAllDonors() {
	assertNotNull(donorService.findAll());
	
}
/*@Test
public void testDelete()
{
	assertNotNull(donorService.delete(1000L));
assertFalse(donorService.findById(1000L));
 }
*/


}
