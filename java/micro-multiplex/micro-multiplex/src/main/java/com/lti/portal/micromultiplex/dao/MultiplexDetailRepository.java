package com.lti.portal.micromultiplex.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.lti.portal.micromultiplex.document.MultiplexDetail;

@Repository
public interface MultiplexDetailRepository extends MongoRepository<MultiplexDetail, String> {

}
