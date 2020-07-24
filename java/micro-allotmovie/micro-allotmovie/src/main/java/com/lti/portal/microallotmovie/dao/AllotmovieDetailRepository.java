package com.lti.portal.microallotmovie.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.lti.portal.microallotmovie.document.Allotmovie;
import com.lti.portal.microallotmovie.dto.AllotmovieDetailDto;
@Repository
public interface AllotmovieDetailRepository extends MongoRepository<Allotmovie, String> {

	Allotmovie findByMultiplexIdAndScreenno(String multiplexId,int screenno);
	List<Allotmovie> findByMovieId(String movieId);

}
