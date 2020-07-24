package com.lti.portal.micromovie.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MovieDetailDto {

	private String id;
	private String name;
	private String category;
	private String producer;
	private String director;
}
