package com.lti.portal.microallotmovie.service;

import java.util.List;

import com.lti.portal.microallotmovie.document.Allotmovie;
import com.lti.portal.microallotmovie.dto.AllotmovieDetailDto;
import com.lti.portal.microallotmovie.dto.AllotmovieDto;

public interface AllotmovieService {

	AllotmovieDetailDto saveMovieMultiplexMapping(AllotmovieDto allotmovieDto, String movieId,
			String multiplexId);
	

	Allotmovie findByMultiplexIdAndScreenno(String multiplexId,
			int screenno);


	List<AllotmovieDetailDto> getAlldetails();


	List<AllotmovieDetailDto> findByMovieId(String movieId);

}
