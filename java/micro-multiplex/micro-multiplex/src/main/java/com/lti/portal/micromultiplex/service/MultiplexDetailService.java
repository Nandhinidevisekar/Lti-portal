package com.lti.portal.micromultiplex.service;

import java.util.List;

import com.lti.portal.micromultiplex.document.MultiplexDetail;
import com.lti.portal.micromultiplex.dto.MultiplexDetailDto;

public interface MultiplexDetailService {

	MultiplexDetailDto createMultiplex(MultiplexDetailDto multiplexDetailDto);

	MultiplexDetailDto updateMultiplex(String multiplexId, MultiplexDetailDto multiplexDetailDto);

	MultiplexDetailDto getMultiplexById(String multiplexId);

	List<MultiplexDetail> getAllMultiplexes();

	String deleteMultiplex(String multiplexId);

}
