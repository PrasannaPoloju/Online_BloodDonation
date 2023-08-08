package com.edubridge;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.edubridge.entity.Receiver;
import com.edubridge.service.ReceiverService;
@SpringBootTest
class ReceiverTestCase {
@Autowired
private ReceiverService receiverService;
static Receiver receiver=null;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		receiver=new Receiver();
		receiver.setName("Samantha");
		receiver.setAddress("hyderabad");
		receiver.setState("Telangana");
		receiver.setAge(39);
		receiver.setGender("Female");
		receiver.setEmail("Samantha@123");
		receiver.setPassword("Samantha@123");
		receiver.setConfirmPassword("Samantha@123");
		receiver.setMobileNumber("5675678908");
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
	void testRegisterReceiver() {
		assertNotNull(receiverService.save(receiver));
	}
@Test
void testGetReceiverById() {
	assertNotNull(receiverService.findById((long) 1001));
}

}
