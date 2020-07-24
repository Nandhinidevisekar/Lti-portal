package com.lti.portal.micromultiplex.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class MultiplexDetail {
	@Id
	private String id;
	private String multiplexName;
	private String location;
	private int noOfScreen;
 }
