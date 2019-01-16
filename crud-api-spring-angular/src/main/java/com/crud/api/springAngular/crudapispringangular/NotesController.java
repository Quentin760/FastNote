package com.crud.api.springAngular.crudapispringangular;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class NotesController {

	@Autowired
	NotesRepository notesRepository;

	@GetMapping("/notes")
	public List<Notes> getAllNotes() {
		System.out.println("Get all Notes...");
		List<Notes> notes = new ArrayList<>();
		notesRepository.findAll().forEach(notes::add);

		return notes;
	}

//	@GetMapping(value = "notes/date/{dateofnote}")
//	public List<Notes> findByDate(@PathVariable Date dateofnote) {
//		List<Notes> notes = notesRepository.findByDate(dateofnote);
//		return notes;
//	}

	@PostMapping(value = "/notes/create")
	public Notes postNotes(@RequestBody Notes note) {

		Notes _note = notesRepository
				.save(new Notes(note.getTitleofnote(), note.getBodyofnote(), note.getDateofnote()));
		return _note;
	}

	@DeleteMapping("/notes/{id}")
	public ResponseEntity<String> deleteNote(@PathVariable("id") long id) {
		System.out.println("Delete note with id :" + id);
		notesRepository.deleteById(id);
		return new ResponseEntity<>("Note has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/notes/delete")
	public ResponseEntity<String> deleteAllNotes() {
		System.out.println("Delete all notes");
		notesRepository.deleteAll();

		return new ResponseEntity<>("Notes has been deleted", HttpStatus.OK);
	}

	@PutMapping("/notes/{id}")
	public ResponseEntity<Notes> updateNote(@PathVariable("id") long id, @RequestBody Notes notes) {
		System.out.println("Update Notes with id : " + id);

		Optional<Notes> notesData = notesRepository.findById(id);

		if (notesData.isPresent()) {
			Notes _notes = notesData.get();
			_notes.setBodyofnote(notes.getBodyofnote());
			_notes.setTitleofnote(notes.getTitleofnote());
			_notes.setDateofnote(notes.getDateofnote());
			_notes.setActive(notes.isActive());
			return new ResponseEntity<>(notesRepository.save(_notes), HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

}
