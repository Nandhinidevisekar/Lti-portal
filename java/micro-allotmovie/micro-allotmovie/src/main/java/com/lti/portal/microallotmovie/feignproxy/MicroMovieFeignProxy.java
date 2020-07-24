package com.lti.portal.microallotmovie.feignproxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.lti.portal.microallotmovie.dto.MovieDetailDto;


@FeignClient(name="micro-movie")
@RibbonClient(name="micro-movie")
public interface MicroMovieFeignProxy {
	@GetMapping("/api/movie/{id}")
	public ResponseEntity<MovieDetailDto> getMovieById(@PathVariable(value="id")String movieId);
	

}
