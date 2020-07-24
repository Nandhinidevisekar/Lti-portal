package com.lti.portal.micromultiplex.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lti.portal.micromultiplex.dao.MultiplexDetailRepository;
import com.lti.portal.micromultiplex.document.MultiplexDetail;
import com.lti.portal.micromultiplex.dto.MultiplexDetailDto;

@Service
public class MultiplexDetailServiceImpl implements MultiplexDetailService{

	private MultiplexDetailRepository multiplexDetRep;
	
	public MultiplexDetailServiceImpl(MultiplexDetailRepository detailRepository) {
		this.multiplexDetRep=detailRepository;
		// TODO Auto-generated constructor stub
	}
	@Override
	public MultiplexDetailDto createMultiplex(MultiplexDetailDto multiplexDetailDto) {
		// TODO Auto-generated method stub
		MultiplexDetail multiplexDetail = new MultiplexDetail(null, multiplexDetailDto.getMultiplexName(), 
				multiplexDetailDto.getLocation(), multiplexDetailDto.getNoOfScreen());
		multiplexDetail = this.multiplexDetRep.save(multiplexDetail);
		MultiplexDetailDto mulDetailDto = new MultiplexDetailDto(multiplexDetail.getId(), 
				multiplexDetail.getMultiplexName(), multiplexDetail.getLocation(), multiplexDetail.getNoOfScreen());
		return mulDetailDto;
	}

	@Override
	public MultiplexDetailDto updateMultiplex(String multiplexId, MultiplexDetailDto multiplexDetailDto) {
		// TODO Auto-generated method stub
		MultiplexDetail multiplexDetail =this.multiplexDetRep.findById(multiplexId).orElse(null);
		multiplexDetail.setMultiplexName(multiplexDetailDto.getMultiplexName());
		multiplexDetail.setLocation(multiplexDetailDto.getLocation());
		multiplexDetail.setNoOfScreen(multiplexDetailDto.getNoOfScreen());
		MultiplexDetail updMultiplexDetail = this.multiplexDetRep.save(multiplexDetail);
		MultiplexDetailDto mulDetailDto = new MultiplexDetailDto(updMultiplexDetail.getId(), 
				updMultiplexDetail.getMultiplexName(), updMultiplexDetail.getLocation(), updMultiplexDetail.getNoOfScreen());
		
		return mulDetailDto;
	}

	@Override
	public MultiplexDetailDto getMultiplexById(String multiplexId) {
		// TODO Auto-generated method stub
		MultiplexDetail multiplexDetail =this.multiplexDetRep.findById(multiplexId).orElse(null);
		MultiplexDetailDto mulDetailDto = new MultiplexDetailDto(multiplexDetail.getId(), 
				multiplexDetail.getMultiplexName(), multiplexDetail.getLocation(), multiplexDetail.getNoOfScreen());
		
		return mulDetailDto;
	}

	@Override
	public List<MultiplexDetail> getAllMultiplexes() {
		// TODO Auto-generated method stub
		List<MultiplexDetail> mulList = this.multiplexDetRep.findAll();
		return mulList;
	}

	@Override
	public String deleteMultiplex(String multiplexId) {
		// TODO Auto-generated method stub
		MultiplexDetail multiplexDetail =this.multiplexDetRep.findById(multiplexId).orElse(null);
		this.multiplexDetRep.delete(multiplexDetail);
		return "success";
	}

}
