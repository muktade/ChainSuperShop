/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Branchexpense;
import com.idb.chainsupershopmanagement.service.BranchexpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class BranchexpenseController {
    
    @Autowired
    private BranchexpenseService branchexpenseService;
    
    @GetMapping("/branchexpense")
    public List<Branchexpense> getAllBranchexpense(){
        return branchexpenseService.viewAllBranchexpense();
    }
    
    @GetMapping("/branchexpense/{bexpid}")
    public ResponseEntity<Branchexpense> getOneBranchexpense(@PathVariable("bexpid") int bexpid){
        Branchexpense branchexp = branchexpenseService.viewOneBranchexpense(bexpid);
        if (branchexp == null){
            return new ResponseEntity<Branchexpense>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Branchexpense>(branchexp, HttpStatus.OK);
    }
    
    @GetMapping("/branchexpense/perbranchexp/{branchid}")
    public ResponseEntity<List<Branchexpense>> getOneBranchexpenseByBranchid(@PathVariable("branchid") int branchid){
        List<Branchexpense> branchexp = branchexpenseService.viewOneBranchexpenseByBranchid(branchid);
        if (branchexp == null){
            return new ResponseEntity<List<Branchexpense>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Branchexpense>>(branchexp, HttpStatus.OK);
    }
    
    @PostMapping("/branchexpense")
    public Branchexpense createBranch(@RequestBody Branchexpense branchexp){
        return branchexpenseService.insertBranchexpense(branchexp);
    }
    
    @PutMapping("/branchexpense/{bexpid}")
    public ResponseEntity<Branchexpense> updateProduct(@PathVariable("bexpid") int bexpid, @RequestBody Branchexpense branchexp){
        
        Branchexpense currentbranchexp = branchexpenseService.viewOneBranchexpense(bexpid);
        
        if (currentbranchexp == null){
            return new ResponseEntity<Branchexpense>(HttpStatus.NOT_FOUND);
        }
        
        currentbranchexp.setBexpid(branchexp.getBexpid());
        currentbranchexp.setBranchid(branchexp.getBranchid());
        currentbranchexp.setExpamount(branchexp.getExpamount());
        currentbranchexp.setExpdesc(branchexp.getExpdesc());
        currentbranchexp.setExpdate(branchexp.getExpdate());
        currentbranchexp.setStatus(branchexp.getStatus());
        
        
        branchexpenseService.updateBranchexpense(currentbranchexp);
        
        return new ResponseEntity<Branchexpense>(currentbranchexp, HttpStatus.OK);
    }
    
    @DeleteMapping("/branchexpense/{bexpid}")
    public ResponseEntity<Branchexpense> deleteProduct(@PathVariable("bexpid") int bexpid){
        Branchexpense branchexp = branchexpenseService.viewOneBranchexpense(bexpid);
        if (branchexp == null){
            return new ResponseEntity<Branchexpense>(HttpStatus.NOT_FOUND);
        }
        branchexpenseService.deleteBranchexpense(bexpid);
        return new ResponseEntity<Branchexpense>(HttpStatus.NO_CONTENT);
    }
}
