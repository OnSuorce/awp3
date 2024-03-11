package it.matteo.awp3.service;

import it.matteo.awp3.entity.Cochange;
import it.matteo.awp3.repository.CochangesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CochangeService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private CochangesRepository repository;

    public Set<String> findDistinctF1AndF2Values() {

        List<String> f1Values = mongoTemplate.query(Cochange.class)
                .distinct("f1")
                .as(String.class)
                .all();


        List<String> f2Values = mongoTemplate.query(Cochange.class)
                .distinct("f2")
                .as(String.class)
                .all();


        Set<String> distinctValues = new HashSet<>();
        distinctValues.addAll(f1Values);
        distinctValues.addAll(f2Values);

        return distinctValues;
    }

    public List<Cochange> findCochangesByDateOrdered(String when) {

        Query query = new Query(
                Criteria.where("when").is(when).and("cumulative_cochanges_p").gt(0.0)
        ).with(Sort.by(Sort.Direction.ASC, "cumulative_cochanges_p"));

        return mongoTemplate.find(query, Cochange.class);
    }

    public List<Cochange> findCochangesByFile(String fileName, String whenStr) {


        Query query = new Query(
                Criteria.where("when").is(whenStr)
                        .and("cumulative_cochanges_p").gt(0.0)
                        .orOperator(
                                Criteria.where("f1").is(fileName),
                                Criteria.where("f2").is(fileName)
                        )
        );

        return mongoTemplate.find(query, Cochange.class);
    }

    public List<Cochange> findCochangesFromPair(String f1, String f2){

        return repository.findByF1AndF2(f1, f2);

    }

}