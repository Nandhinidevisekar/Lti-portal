package com.lti.portal.micromultiplex.controller;

import java.util.List;

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

import com.lti.portal.micromultiplex.document.MultiplexDetail;
import com.lti.portal.micromultiplex.dto.MultiplexDetailDto;
import com.lti.portal.micromultiplex.service.MultiplexDetailService;

@RestController
@RequestMapping("/api/multiplex")
public class MultiplexDetailController 
{
	private MultiplexDetailService multiplexDetailService;
	
   @Autowired
   public MultiplexDetailController(MultiplexDetailService multiplexDetailService) {
	// TODO Auto-generated constructor stub
	   this.multiplexDetailService= multiplexDetailService;
}
   
   @PostMapping("/create")
   public ResponseEntity<MultiplexDetailDto> createMultiplex(@RequestBody MultiplexDetailDto multiplexDetailDto)
   {
	   MultiplexDetailDto muDetailDto = this.multiplexDetailService.createMultiplex(multiplexDetailDto);
	   ResponseEntity<MultiplexDetailDto> response= new ResponseEntity<MultiplexDetailDto> (muDetailDto,HttpStatus.OK);
	   return response;
   }
   
	@PutMapping("/{id}")
	public ResponseEntity<MultiplexDetailDto> updateMultiplex(@PathVariable(value="id")String multiplexId,@RequestBody MultiplexDetailDto multiplexDetailDto)
	{
		MultiplexDetailDto muDetailDto= this.multiplexDetailService.updateMultiplex(multiplexId,multiplexDetailDto);
		ResponseEntity<MultiplexDetailDto> response= new ResponseEntity<MultiplexDetailDto>(muDetailDto,HttpStatus.OK);
		return response;
	}
	
	@DeleteMapping("/{id}")
	public String deleteMultiplex(@PathVariable(value="id")String multiplexId)
	{
		String deleteResponse= this.multiplexDetailService.deleteMultiplex(multiplexId);
		return deleteResponse;
	}
	
	@GetMapping("/multiplexes")
	public List<MultiplexDetail> getAllMultiplexes()
	{
		List<MultiplexDetail> multiplexList= this.multiplexDetailService.getAllMultiplexes();
		return multiplexList;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<MultiplexDetailDto> getMultiplexById(@PathVariable(value="id")String multiplexId)
	{
		MultiplexDetailDto multiplexDetailDto2= this.multiplexDetailService.getMultiplexById(multiplexId);
		ResponseEntity<MultiplexDetailDto> response= new ResponseEntity<MultiplexDetailDto>(multiplexDetailDto2,HttpStatus.OK);
		return response;
	}
}
