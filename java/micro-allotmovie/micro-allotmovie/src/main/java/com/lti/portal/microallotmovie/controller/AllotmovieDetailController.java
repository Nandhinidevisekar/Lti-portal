package com.lti.portal.microallotmovie.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.portal.microallotmovie.document.Allotmovie;
import com.lti.portal.microallotmovie.dto.AllotmovieDetailDto;
import com.lti.portal.microallotmovie.dto.AllotmovieDto;
import com.lti.portal.microallotmovie.service.AllotmovieService;

@RestController
@RequestMapping("/api/allotmovie")
public class AllotmovieDetailController {
	private AllotmovieService allotmovieService;
	
	public AllotmovieDetailController(AllotmovieService allotmovieService) {
		// TODO Auto-generated constructor stub
		this.allotmovieService=allotmovieService;
	}
	
	//post method 
	@PostMapping("/save/{movieId}/{multiplexId}")
	public ResponseEntity<AllotmovieDetailDto> saveMovieMultiplexMapping(@PathVariable("movieId") String movieId,
			@PathVariable("multiplexId") String multiplexId, @RequestBody AllotmovieDto allotmovieDto)
	{
		AllotmovieDetailDto allotmovieDetailDto2 = this.allotmovieService.saveMovieMultiplexMapping(allotmovieDto,
				movieId,multiplexId);
		ResponseEntity<AllotmovieDetailDto> respose = new ResponseEntity<AllotmovieDetailDto>(allotmovieDetailDto2, HttpStatus.OK);
		return respose;
	}

	@GetMapping("/{multiplexId}/{screenno}")
	public ResponseEntity<Allotmovie> findByMultiplexIdAndScreenno (@PathVariable("multiplexId") String multiplexId,
			@PathVariable("screenno")int screenno)
	{
		
		Allotmovie allotmovie = this.allotmovieService.findByMultiplexIdAndScreenno(multiplexId, screenno);
		ResponseEntity<Allotmovie> response= new ResponseEntity<Allotmovie>(allotmovie, HttpStatus.OK);
		return response;
	}
	
	@GetMapping("/allotlist")
	public List<AllotmovieDetailDto> getAllAllotedList()
	{
		List<AllotmovieDetailDto> allotedList= this.allotmovieService.getAlldetails();
		return allotedList;
	}
	
	@GetMapping("/searchlist/{movieId}")
	public List<AllotmovieDetailDto> findByMovieId(@PathVariable("movieId") String movieId)
	{
		List<AllotmovieDetailDto> allotedsearchList= this.allotmovieService.findByMovieId(movieId);
		return allotedsearchList;
	}
	

}
