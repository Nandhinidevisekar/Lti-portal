package com.lti.portal.micromovie.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.portal.micromovie.document.MovieDetail;
import com.lti.portal.micromovie.dto.MovieDetailDto;
import com.lti.portal.micromovie.service.MovieService;

@RestController
@RequestMapping("/api/movie")
public class MovieDetailController {
	
    private MovieService movieService;
	
	@Autowired
	public MovieDetailController(MovieService movieService) {
		// TODO Auto-generated constructor stub
		this.movieService=movieService;
	}
	
	@PostMapping("/create")
	public ResponseEntity<MovieDetailDto> createMovie(@RequestBody MovieDetailDto movieDetailDto) {
		System.out.println("create movie");
		MovieDetailDto movieDetailDto2= this.movieService.createMovie(movieDetailDto);
		ResponseEntity<MovieDetailDto> response=new ResponseEntity<MovieDetailDto>(movieDetailDto2,HttpStatus.OK);
		return response;
	}
	//need to send both id and object
	@PutMapping("/{id}")
	public ResponseEntity<MovieDetailDto> updateMovie(@PathVariable(value="id")String movieId,@RequestBody MovieDetailDto movieDetailDto)
	{
		MovieDetailDto movieDetailDto2= this.movieService.updateMovie(movieId,movieDetailDto);
		ResponseEntity<MovieDetailDto> response= new ResponseEntity<MovieDetailDto>(movieDetailDto2,HttpStatus.OK);
		return response;
	}
	
	@DeleteMapping("/{id}")
	public String deleteMovie(@PathVariable(value="id")String movieId)
	{
		String deleteResponse= this.movieService.deleteMovie(movieId);
		return deleteResponse;
	}
	
	@GetMapping("/movies")
	public List<MovieDetail> getAllMovies()
	{
		List<MovieDetail> movieList= this.movieService.getAllMovies();
		return movieList;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<MovieDetailDto> getMovieById(@PathVariable(value="id")String movieId)
	{
		MovieDetailDto movieDetailDto2= this.movieService.getMovieById(movieId);
		ResponseEntity<MovieDetailDto> response= new ResponseEntity<MovieDetailDto>(movieDetailDto2,HttpStatus.OK);
		return response;
	}
	
	@GetMapping("/search/{name}")
	public List<MovieDetail> findByNameLike(@PathVariable(value="name") String name)
	{
		List<MovieDetail> movieList= this.movieService.findByNameLike(".*"+name+".*");
		System.out.println(movieList.size());
		return movieList;
	}

}
