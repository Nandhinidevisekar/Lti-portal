package com.lti.portal.micromovie.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.portal.micromovie.document.MovieDetail;

@Repository	
public interface MovieDetailRepository extends MongoRepository<MovieDetail, String> {
    @Query("{'name': {$regex: ?0 }})")
	List<MovieDetail> findByNameRegex(String name);

}
