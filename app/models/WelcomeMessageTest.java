package models;

import static org.junit.Assert.*;

import org.junit.Test;

public class WelcomeMessageTest {

	@Test
	public void testGetMessage() {
		assertEquals("Hello! Play Framework!!よろしくーへろくー", new WelcomeMessage().getMessage());
	}

}
