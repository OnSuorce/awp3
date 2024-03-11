package it.matteo.awp3.repository;

import it.matteo.awp3.entity.Cochange;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.Date;
import java.util.List;

public interface CochangesRepository extends MongoRepository<Cochange, String> {

    List<Cochange> findByF1AndF2(String f1, String f2);

    List<Cochange> findByF1(String f1);

    @Query("{$or: [{'f1': ?0, 'f2': {$ne: ?0}}, {'f2': ?0, 'f1': {$ne: ?0}}]}")
    List<Cochange> findByF1OrF2ButNotBoth(String value);



}

