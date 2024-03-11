package it.matteo.awp3.controller;

import it.matteo.awp3.entity.Cochange;
import it.matteo.awp3.service.CochangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/api/awp3")
public class ApiController {

    @Autowired
    CochangeService service;

    @GetMapping("/files")
    public Set<String> getFileNames(){
        return service.findDistinctF1AndF2Values();
    }

    @GetMapping("/cochange-from-singlefile")
    public List<Cochange> getCochangesFromSingleFile (@RequestParam("file")String f1, @RequestParam("date")String date){

        return  service.findCochangesByFile(f1, date);

    }

    @GetMapping("/cochange-from-pair")
    public List<Cochange> getCochangesFromPair (@RequestParam("f1")String f1, @RequestParam("f2")String f2){

        return  service.findCochangesFromPair(f1, f2);

    }

    @GetMapping("/cochangesp")
    public List<Cochange> getCochanges (@RequestParam("date")String date){

        return service.findCochangesByDateOrdered(date);
    }
}
