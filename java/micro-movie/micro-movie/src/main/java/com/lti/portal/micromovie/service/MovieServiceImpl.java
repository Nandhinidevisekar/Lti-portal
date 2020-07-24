package com.lti.portal.micromovie.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.lti.portal.micromovie.dao.MovieDetailRepository;
import com.lti.portal.micromovie.document.MovieDetail;
import com.lti.portal.micromovie.dto.MovieDetailDto;

@Service
public class MovieServiceImpl implements MovieService {

	//convert dto to document and save
	private MovieDetailRepository movieDetailRepository;

	 public MovieServiceImpl(MovieDetailRepository movieDetailRepository) {
		// TODO Auto-generated constructor stub
		this.movieDetailRepository=movieDetailRepository;
	}
	@Override
	public MovieDetailDto createMovie(MovieDetailDto movieDetailDto) {
		// TODO Auto-generated method stub
		MovieDetail movieDetail = new MovieDetail(null, movieDetailDto.getName(), movieDetailDto.getCategory(),
									movieDetailDto.getProducer(), movieDetailDto.getDirector());
		movieDetail=this.movieDetailRepository.save(movieDetail);
		MovieDetailDto movieDetailDto1 = new MovieDetailDto(movieDetail.getId(), movieDetail.getName(),
				movieDetail.getCategory(), movieDetail.getProducer(), movieDetail.getDirector());
		return movieDetailDto;
	}
	
	@Override
	public MovieDetailDto updateMovie(String movieId,MovieDetailDto movieDetailDto) {
		// TODO Auto-generated method stub
		MovieDetail movieDetail = this.movieDetailRepository.findById(movieId).orElse(null);
		movieDetail.setName(movieDetailDto.getName());
		movieDetail.setCategory(movieDetailDto.getCategory());
		movieDetail.setDirector(movieDetailDto.getDirector());
		movieDetail.setProducer(movieDetailDto.getProducer());
		MovieDetail updMovieDetail = this.movieDetailRepository.save(movieDetail);
		MovieDetailDto movieDetailDto2= new MovieDetailDto(updMovieDetail.getId(), 
				updMovieDetail.getName(), updMovieDetail.getCategory(), updMovieDetail.getProducer(), updMovieDetail.getDirector());
		return movieDetailDto2;
	}
	@Override
	public String deleteMovie(String movieId) {
		// TODO Auto-generated method stub
		MovieDetail movieDetail =this.movieDetailRepository.findById(movieId).orElse(null);
		this.movieDetailRepository.delete(movieDetail);
				
		return "success";
	}
	@Override
	public List<MovieDetail> getAllMovies() {
		// TODO Auto-generated method stub
		
		List<MovieDetail> moviesList = this.movieDetailRepository.findAll();
		
		return moviesList;
	}
	@Override
	public MovieDetailDto getMovieById(String movieId) {
		// TODO Auto-generated method stub
		MovieDetail movieDetail =this.movieDetailRepository.findById(movieId).orElse(null);
		if(movieDetail!=null)
		{
		MovieDetailDto movieDetailDto2= new MovieDetailDto(movieDetail.getId(), 
				movieDetail.getName(), movieDetail.getCategory(), movieDetail.getProducer(), movieDetail.getDirector());
		
		return movieDetailDto2;
		}
		return null;
	}
	@Override
	public List<MovieDetail> findByNameLike(String name) {
		// TODO Auto-generated method stub
		List<MovieDetail> listbyname= this.movieDetailRepository.findByNameRegex(name);
		return listbyname;
	}

}
