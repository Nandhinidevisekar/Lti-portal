package com.lti.portal.microallotmovie.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.lti.portal.microallotmovie.dao.AllotmovieDetailRepository;
import com.lti.portal.microallotmovie.document.Allotmovie;
import com.lti.portal.microallotmovie.dto.AllotmovieDetailDto;
import com.lti.portal.microallotmovie.dto.AllotmovieDto;
import com.lti.portal.microallotmovie.dto.MovieDetailDto;
import com.lti.portal.microallotmovie.dto.MultiplexDetailDto;
import com.lti.portal.microallotmovie.feignproxy.MicroMovieFeignProxy;
import com.lti.portal.microallotmovie.feignproxy.MicroMultiplexFeignProxy;

@Service
public class AllotmovieServiceImpl implements AllotmovieService {

//	private static String MOVIE_URL="http://localhost:6070/api/movie";
//	private static String MULTIPLEX_URL="http://localhost:6071/api/multiplex";

	private AllotmovieDetailRepository allotmovieRep;
	//private RestTemplate restTemplate;
	private MicroMovieFeignProxy movieProxy;
	private MicroMultiplexFeignProxy multiplexproxy;
	public AllotmovieServiceImpl(AllotmovieDetailRepository allotmovieRep, MicroMovieFeignProxy movieProxy,MicroMultiplexFeignProxy multiplexproxy) {
		// TODO Auto-generated constructor stub
		this.allotmovieRep =allotmovieRep;
		//this.restTemplate= restTemplate;
		this.movieProxy=movieProxy;
		this.multiplexproxy = multiplexproxy;
	}
	@Override
	public AllotmovieDetailDto saveMovieMultiplexMapping(AllotmovieDto allotmovieDto, String movieId,
			String multiplexId) {
		// TODO Auto-generated method stub
		
		Allotmovie allotDoc= new Allotmovie(null, movieId, multiplexId, allotmovieDto.getScreenno());
		allotDoc = this.allotmovieRep.save(allotDoc);
		//MovieDetailDto movieDetailDto= this.restTemplate.getForObject(MOVIE_URL+"/get"+movieId, MovieDetailDto.class);
		//MultiplexDetailDto multiplexDetailDto= this.restTemplate.getForObject(MULTIPLEX_URL+"/get"+multiplexId,MultiplexDetailDto.class);
		MovieDetailDto movieDetailDto= this.movieProxy.getMovieById(movieId).getBody();
		MultiplexDetailDto multiplexDetailDto = this.multiplexproxy.getMultiplexById(multiplexId).getBody();
		
		AllotmovieDetailDto allotmovieDetailDto2 = new AllotmovieDetailDto(allotDoc.getId(),
							allotDoc.getMovieId(), allotDoc.getMultiplexId(), allotDoc.getScreenno(),
							multiplexDetailDto, movieDetailDto);
		return allotmovieDetailDto2;
	}
	@Override
	public Allotmovie findByMultiplexIdAndScreenno(String multiplexId, int screenno) {
		// TODO Auto-generated method stub
		Allotmovie allotmovie =this.allotmovieRep.findByMultiplexIdAndScreenno(multiplexId, screenno);
		if(allotmovie!=null)
		{
			return allotmovie;
		}
		return null;
	}
	@Override
	public List<AllotmovieDetailDto> getAlldetails() {
		// TODO Auto-generated method stub
		List<Allotmovie> allotList= this.allotmovieRep.findAll();
		List<AllotmovieDetailDto> allotedListdet = new ArrayList<AllotmovieDetailDto>();
		
		for (Allotmovie allotedmovie : allotList) {
			MovieDetailDto movieDetailDto= this.movieProxy.getMovieById(allotedmovie.getMovieId()).getBody();
			MultiplexDetailDto multiplexDetailDto = this.multiplexproxy.getMultiplexById(allotedmovie.getMultiplexId()).getBody();
			AllotmovieDetailDto allotmovieDetailDto2 = new AllotmovieDetailDto(allotedmovie.getId(),
					allotedmovie.getMovieId(), allotedmovie.getMultiplexId(), allotedmovie.getScreenno(),
					multiplexDetailDto, movieDetailDto);
			
			allotedListdet.add(allotmovieDetailDto2);
		}
		return allotedListdet;
	}
	@Override
	public List<AllotmovieDetailDto> findByMovieId(String movieId) {
		// TODO Auto-generated method stub
		List<Allotmovie> searchList= this.allotmovieRep.findByMovieId(movieId);
		List<AllotmovieDetailDto> searchListdet = new ArrayList<AllotmovieDetailDto>();
		
		for (Allotmovie allotedmovie : searchList) {
			MovieDetailDto movieDetailDto= this.movieProxy.getMovieById(allotedmovie.getMovieId()).getBody();
			MultiplexDetailDto multiplexDetailDto = this.multiplexproxy.getMultiplexById(allotedmovie.getMultiplexId()).getBody();
			AllotmovieDetailDto allotmovieDetailDto2 = new AllotmovieDetailDto(allotedmovie.getId(),
					allotedmovie.getMovieId(), allotedmovie.getMultiplexId(), allotedmovie.getScreenno(),
					multiplexDetailDto, movieDetailDto);
			
			searchListdet.add(allotmovieDetailDto2);
		}
		
		
		return searchListdet;
	}

}
