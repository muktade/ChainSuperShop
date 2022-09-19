/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Receivedetail;
import com.idb.chainsupershopmanagement.service.ReceivedetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ReceivedetailController {
    
    @Autowired
    private ReceivedetailService receivedetailService;
    
    @GetMapping("/receivedetail")
    public List<Receivedetail> getAllReceivedetail(){
        return receivedetailService.viewAllReceivedetail();
    }
    
    @GetMapping("/receivedetail/{recdetid}")
    public ResponseEntity<Receivedetail> getOneIssuedetails(@PathVariable("recdetid") int recdetid){
        Receivedetail receivedetail = receivedetailService.viewOneReceivedetail(recdetid);
        if (receivedetail == null){
            return new ResponseEntity<Receivedetail>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Receivedetail>(receivedetail, HttpStatus.OK);
    }
    
    @PostMapping("/receivedetail")
    public Receivedetail createIssuedetails(@RequestBody Receivedetail receivedetail){
        return receivedetailService.insertReceivedetail(receivedetail);
    }
    
    @PutMapping("/receivedetail/{recdetid}")
    public ResponseEntity<Receivedetail> updateIssueproduct(@PathVariable("recdetid") int recdetid, @RequestBody Receivedetail receivedetail){
        
        Receivedetail currentreceivedetail = receivedetailService.viewOneReceivedetail(recdetid);
        
        if (currentreceivedetail == null){
            return new ResponseEntity<Receivedetail>(HttpStatus.NOT_FOUND);
        }
        
        currentreceivedetail.setRecdetid(receivedetail.getRecdetid());
        currentreceivedetail.setRecid(receivedetail.getRecid());
        currentreceivedetail.setPid(receivedetail.getPid());
        currentreceivedetail.setRecqty(receivedetail.getRecqty());
        currentreceivedetail.setSpricerate(receivedetail.getSpricerate());
        
        receivedetailService.updateReceivedetail(currentreceivedetail);
        
        return new ResponseEntity<Receivedetail>(currentreceivedetail, HttpStatus.OK);
    }
    
    @DeleteMapping("/receivedetail/{recdetid}")
    public ResponseEntity<Receivedetail> deleteIssueproduct(@PathVariable("recdetid") int recdetid){
        Receivedetail receivedetail = receivedetailService.viewOneReceivedetail(recdetid);
        if (receivedetail == null){
            return new ResponseEntity<Receivedetail>(HttpStatus.NOT_FOUND);
        }
        receivedetailService.deleteReceivedetail(recdetid);
        return new ResponseEntity<Receivedetail>(HttpStatus.NO_CONTENT);
    }
    
}
