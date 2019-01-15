package com.crud.api.springAngular.crudapispringangular;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notes")
public class Notes {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "titleofnote")
	private String titleofnote;

	@Column(name = "bodyofnote")
	private String bodyofnote;

	@Column(name = "dateofnote")
	private Date dateofnote;

	@Column(name = "active")
	private Boolean active;

	public Notes() {
	}

	public Notes(String titleofnote, String bodyofnote, Date dateofnote) {
		this.titleofnote = titleofnote;
		this.bodyofnote = bodyofnote;
		this.dateofnote = dateofnote;
		this.active = false;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitleofnote() {
		return titleofnote;
	}

	public void setTitleofnote(String titleofnote) {
		this.titleofnote = titleofnote;
	}

	public String getBodyofnote() {
		return bodyofnote;
	}

	public void setBodyofnote(String bodyofnote) {
		this.bodyofnote = bodyofnote;
	}

	public Date getDateofnote() {
		return dateofnote;
	}

	public void setDateofnote(Date dateofnote) {
		this.dateofnote = dateofnote;
	}

	public Boolean isActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Notes [id=" + id + ", titleofnote=" + titleofnote + ", bodyofnote=" + bodyofnote + ", dateofnote="
				+ dateofnote + ", active=" + active + "]";
	}

}
