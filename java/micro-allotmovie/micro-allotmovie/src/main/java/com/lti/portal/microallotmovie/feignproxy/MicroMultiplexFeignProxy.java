package com.lti.portal.microallotmovie.feignproxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.lti.portal.microallotmovie.dto.MultiplexDetailDto;


@FeignClient(name="micro-multiplex")
@RibbonClient(name="micro-multiplex")
public interface MicroMultiplexFeignProxy {
	@GetMapping("/api/multiplex/{id}")
	public ResponseEntity<MultiplexDetailDto> getMultiplexById(@PathVariable(value="id")String multiplexId);
	

}
