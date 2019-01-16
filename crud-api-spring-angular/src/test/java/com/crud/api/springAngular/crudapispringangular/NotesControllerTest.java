package com.crud.api.springAngular.crudapispringangular;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

public class NotesControllerTest extends AbstractTest {

	@Override
	@Before
	public void setUp() {
		super.setUp();
	}

	@Test
	public void getAllNotes() throws Exception {
		String uri = "/notes";
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON_VALUE))
				.andReturn();

		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
		String content = mvcResult.getResponse().getContentAsString();
		Notes[] noteList = super.mapFromJson(content, Notes[].class);
		assertTrue(noteList.length > 0);
	}

//	@Test
//	public void postNotes() throws Exception {
//		String uri = "/notes/create";
//		Notes note = new Notes();
//		note.setId(2);
//		note.setTitleofnote("Hello");
//		note.setBodyofnote("Liste de course");
//		String inputJson = super.mapToJson(note);
//		MvcResult mvcResult = mvc.perform(
//				MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
//				.andReturn();
//		int status = mvcResult.getResponse().getStatus();
//		assertEquals(201, status);
//		String content = mvcResult.getResponse().getContentAsString();
//		assertEquals(content, "Note is created successfully");
//
//	}
//
//	@Test
//	public void deleteNote() throws Exception {
//		String uri = "/notes/8";
//		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
//		int status = mvcResult.getResponse().getStatus();
//		assertEquals(200, status);
//		String content = mvcResult.getResponse().getContentAsString();
//		assertEquals(content, "Note has been deleted!");
//	}
}
