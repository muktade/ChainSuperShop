/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Receiveproduct;
import com.idb.chainsupershopmanagement.service.ReceiveproductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ReceiveProductController {
    
    @Autowired
    private ReceiveproductService receiveproductService;
    
    @GetMapping("/receiveproduct")
    public List<Receiveproduct> getAllReceiveproduct(){
        return receiveproductService.viewAllReceiveproduct();
    }
    
    @GetMapping("/receiveproduct/{recid}")
    public ResponseEntity<Receiveproduct> getOneReceiveproduct(@PathVariable("recid") int recid){
        Receiveproduct receiveproduct = receiveproductService.viewOneReceiveproduct(recid);
        if (receiveproduct == null){
            return new ResponseEntity<Receiveproduct>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Receiveproduct>(receiveproduct, HttpStatus.OK);
    }
    
    @PostMapping("/receiveproduct")
    public Receiveproduct createReceiveproduct(@RequestBody Receiveproduct receiveproduct){
        return receiveproductService.insertReceiveproduct(receiveproduct);
    }
    
    @PutMapping("/receiveproduct/{recid}")
    public ResponseEntity<Receiveproduct> updateReceiveproduct(@PathVariable("recid") int recid, @RequestBody Receiveproduct receiveproduct){
        
        Receiveproduct currentreceiveproduct = receiveproductService.viewOneReceiveproduct(recid);
        
        if (currentreceiveproduct == null){
            return new ResponseEntity<Receiveproduct>(HttpStatus.NOT_FOUND);
        }
        
        currentreceiveproduct.setRecid(receiveproduct.getRecid());
        currentreceiveproduct.setBranchid(receiveproduct.getBranchid());
        currentreceiveproduct.setRecdate(receiveproduct.getRecdate());
        currentreceiveproduct.setIssueid(receiveproduct.getIssueid());
        currentreceiveproduct.setIssuedetid(receiveproduct.getIssuedetid());
        currentreceiveproduct.setStatus(receiveproduct.getStatus());
        
        
        
        
        receiveproductService.updateReceiveproduct(currentreceiveproduct);
        
        return new ResponseEntity<Receiveproduct>(currentreceiveproduct, HttpStatus.OK);
    }
    
    @DeleteMapping("/receiveproduct/{recid}")
    public ResponseEntity<Receiveproduct> deleteReceiveproduct(@PathVariable("recid") int recid){
        Receiveproduct receiveproduct = receiveproductService.viewOneReceiveproduct(recid);
        if (receiveproduct == null){
            return new ResponseEntity<Receiveproduct>(HttpStatus.NOT_FOUND);
        }
        receiveproductService.deleteReceiveproduct(recid);
        return new ResponseEntity<Receiveproduct>(HttpStatus.NO_CONTENT);
    }
    
}
