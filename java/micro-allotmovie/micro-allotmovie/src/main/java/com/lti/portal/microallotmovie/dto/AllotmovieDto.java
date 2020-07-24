package com.lti.portal.microallotmovie.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AllotmovieDto {

	private String id;
	private String movieId;
	private String multiplexId;
	private int screenno;
}
