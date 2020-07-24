package com.lti.portal.micromovie.service;


import java.util.List;

import com.lti.portal.micromovie.document.MovieDetail;
import com.lti.portal.micromovie.dto.MovieDetailDto;

public interface MovieService {
	public MovieDetailDto createMovie(MovieDetailDto movieDetailDto);

	public MovieDetailDto updateMovie(String movieId,MovieDetailDto movieDetailDto);

	public String deleteMovie(String movieId);

	public List<MovieDetail> getAllMovies();

	public MovieDetailDto getMovieById(String movieId);

	public List<MovieDetail> findByNameLike(String name);


}
