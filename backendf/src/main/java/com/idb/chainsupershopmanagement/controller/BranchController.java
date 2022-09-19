/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Branchinfo;
import com.idb.chainsupershopmanagement.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class BranchController {
    
    @Autowired
    private BranchService branchService;
    
    @GetMapping("/branch")
    public List<Branchinfo> getAllBranch(){
        return branchService.viewAllBranch();
    }
    
    @GetMapping("/branch/branchlist")
    public List<Branchinfo> getAllBranchLocation(){
        return branchService.viewAllBranchLocation();
    }
    
    @GetMapping("/branch/{bid}")
    public ResponseEntity<Branchinfo> getOneBranch(@PathVariable("bid") int bid){
        Branchinfo branch = branchService.viewOneBranch(bid);
        if (branch == null){
            return new ResponseEntity<Branchinfo>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Branchinfo>(branch, HttpStatus.OK);
    }
    
    @GetMapping("/branch/pro/{bname}")
    public ResponseEntity<Branchinfo> getBranchByLocation(@PathVariable("bname") String bname){
        Branchinfo branch = branchService.viewBranchByLocation(bname);
        if (branch == null){
            return new ResponseEntity<Branchinfo>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Branchinfo>(branch, HttpStatus.OK);
    }
    
    @GetMapping("/branch/id/{bname}")
    public ResponseEntity<Integer> getBranchIdByLocation(@PathVariable("bname") String bname){
        Branchinfo branch = branchService.viewBranchByLocation(bname);
        if (branch == null){
            return new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Integer>(branch.getBranchid(), HttpStatus.OK);
    }
    
    @GetMapping("/branch/location/{bid}")
    public ResponseEntity<String> getOneBranchLocationById(@PathVariable("bid") int bid){
        Branchinfo branch = branchService.viewOneBranch(bid);
        if (branch == null){
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(branch.getBlocation(), HttpStatus.OK);
    }
    
    @PostMapping("/branch")
    public Branchinfo createBranch(@RequestBody Branchinfo branch){
        return branchService.insertBranchLocation(branch);
    }
    
    @PutMapping("/branch/{bid}")
    public ResponseEntity<Branchinfo> updateProduct(@PathVariable("bid") int bid, @RequestBody Branchinfo branch){
        
        Branchinfo currentbranch = branchService.viewOneBranch(bid);
        
        if (currentbranch == null){
            return new ResponseEntity<Branchinfo>(HttpStatus.NOT_FOUND);
        }
        
        currentbranch.setBranchid(branch.getBranchid());
        currentbranch.setBlocation(branch.getBlocation());
        currentbranch.setBcontact(branch.getBcontact());
        currentbranch.setBemail(branch.getBemail());
        currentbranch.setBdesc(branch.getBdesc());
        
        branchService.updateBranch(currentbranch);
        
        return new ResponseEntity<Branchinfo>(currentbranch, HttpStatus.OK);
    }
    
    @DeleteMapping("/branch/{bid}")
    public ResponseEntity<Branchinfo> deleteProduct(@PathVariable("bid") int bid){
        Branchinfo branch = branchService.viewOneBranch(bid);
        if (branch == null){
            return new ResponseEntity<Branchinfo>(HttpStatus.NOT_FOUND);
        }
        branchService.deleteBranch(bid);
        return new ResponseEntity<Branchinfo>(HttpStatus.NO_CONTENT);
    }
    
}
