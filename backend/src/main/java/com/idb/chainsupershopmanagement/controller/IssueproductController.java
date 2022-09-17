/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Issueproduct;
import com.idb.chainsupershopmanagement.service.IssueproductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class IssueproductController {
   
    @Autowired
    private IssueproductService issueproductService;
    
    @GetMapping("/issueproduct")
    public List<Issueproduct> getAllIssueproduct(){
        return issueproductService.viewAllIssueproduct();
    }
    
    @GetMapping("/issueproduct/{issueid}")
    public ResponseEntity<Issueproduct> getOneIssueproduct(@PathVariable("issueid") int issueid){
        Issueproduct issueproduct = issueproductService.viewOneIssueproduct(issueid);
        if (issueproduct == null){
            return new ResponseEntity<Issueproduct>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Issueproduct>(issueproduct, HttpStatus.OK);
    }
    
    @PostMapping("/issueproduct")
    public Issueproduct createIssueproduct(@RequestBody Issueproduct issueproduct){
        return issueproductService.insertIssueproduct(issueproduct);
    }
    
    @PutMapping("/issueproduct/{issueid}")
    public ResponseEntity<Issueproduct> updateIssueproduct(@PathVariable("issueid") int issueid, @RequestBody Issueproduct issueproduct){
        
        Issueproduct currentissueproduct = issueproductService.viewOneIssueproduct(issueid);
        
        if (currentissueproduct == null){
            return new ResponseEntity<Issueproduct>(HttpStatus.NOT_FOUND);
        }
        
        currentissueproduct.setIssueid(issueproduct.getIssueid());
        currentissueproduct.setIssuedate(issueproduct.getIssuedate());
        currentissueproduct.setEmailid(issueproduct.getEmailid());
   
        
        
        
        issueproductService.updateIssueproduct(currentissueproduct);
        
        return new ResponseEntity<Issueproduct>(currentissueproduct, HttpStatus.OK);
    }
    
    @DeleteMapping("/issueproduct/{issueid}")
    public ResponseEntity<Issueproduct> deleteIssueproduct(@PathVariable("issueid") int issueid){
        Issueproduct issueproduct = issueproductService.viewOneIssueproduct(issueid);
        if (issueproduct == null){
            return new ResponseEntity<Issueproduct>(HttpStatus.NOT_FOUND);
        }
        issueproductService.deleteIssueproduct(issueid);
        return new ResponseEntity<Issueproduct>(HttpStatus.NO_CONTENT);
    }
}
