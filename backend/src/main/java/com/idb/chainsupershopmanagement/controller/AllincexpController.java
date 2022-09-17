
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Allincexp;
import com.idb.chainsupershopmanagement.model.Allincexp;
import com.idb.chainsupershopmanagement.service.AllincexpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class AllincexpController {
    
    @Autowired
    private AllincexpService allincexpService;
    
    @GetMapping("/allincexp")
    public List<Allincexp> getAllincexp(){
        return allincexpService.viewAllincexp();
    }
    
    @GetMapping("/allincexp/{incexpid}")
    public ResponseEntity<Allincexp> getOneAllincexp(@PathVariable("incexpid") int incexpid){
        Allincexp allincexp = allincexpService.viewOneAllincexp(incexpid);
        if (allincexp == null){
            return new ResponseEntity<Allincexp>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Allincexp>(allincexp, HttpStatus.OK);
    }
    
    @GetMapping("/allincexp/income/{bsaleid}")
    public ResponseEntity<List<Allincexp>> getAllinc(@PathVariable("bsaleid") int bsaleid){
        List<Allincexp> allincexp = allincexpService.viewAllinc(bsaleid);
        if (allincexp == null){
            return new ResponseEntity<List<Allincexp>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Allincexp>>(allincexp, HttpStatus.OK);
    }
    
    @GetMapping("/allincexp/expense/{bexpid}")
    public ResponseEntity<List<Allincexp>> getAllexp(@PathVariable("bexpid") int bexpid){
        List<Allincexp> allincexp = allincexpService.viewAllexp(bexpid);
        if (allincexp == null){
            return new ResponseEntity<List<Allincexp>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Allincexp>>(allincexp, HttpStatus.OK);
    }
    
    @GetMapping("/allincexp/datewise/{odate}")
    public ResponseEntity<List<Allincexp>> getAllincexpByDate(@PathVariable("odate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date odate){
        
        //Date date=new SimpleDateFormat("yyyy/MM/dd").parse(odate);
        
        List<Allincexp> allincexp = allincexpService.Allincexp(odate);
        if (allincexp == null){
            return new ResponseEntity<List<Allincexp>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Allincexp>>(allincexp, HttpStatus.OK);
    }
    
    @PostMapping("/allincexp")
    public Allincexp createAllincexp(@RequestBody Allincexp allincexp){
        return allincexpService.insertAllincexp(allincexp);
    }
    
    @PutMapping("/allincexp/{incexpid}")
    public ResponseEntity<Allincexp> updateProduct(@PathVariable("incexpid") int incexpid, @RequestBody Allincexp allincexp){
        
        Allincexp currentallincexp = allincexpService.viewOneAllincexp(incexpid);
        
        if (currentallincexp == null){
            return new ResponseEntity<Allincexp>(HttpStatus.NOT_FOUND);
        }
        
        currentallincexp.setIncexpid(allincexp.getIncexpid());
        currentallincexp.setBexpid(allincexp.getBexpid());
        currentallincexp.setBsaleid(allincexp.getBsaleid());
        currentallincexp.setExpamount(allincexp.getExpamount());
        currentallincexp.setIncamount(allincexp.getIncamount());
        currentallincexp.setOdate(allincexp.getOdate());
        
        allincexpService.updateAllincexp(currentallincexp);
        
        return new ResponseEntity<Allincexp>(currentallincexp, HttpStatus.OK);
    }
    
    @DeleteMapping("/allincexp/{incexpid}")
    public ResponseEntity<Allincexp> deleteProduct(@PathVariable("incexpid") int incexpid){
        Allincexp allincexp = allincexpService.viewOneAllincexp(incexpid);
        if (allincexp == null){
            return new ResponseEntity<Allincexp>(HttpStatus.NOT_FOUND);
        }
        allincexpService.deleteAllincexp(incexpid);
        return new ResponseEntity<Allincexp>(HttpStatus.NO_CONTENT);
    }
}
