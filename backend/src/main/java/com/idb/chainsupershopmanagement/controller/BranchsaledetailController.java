/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Branchsaledetail;
import com.idb.chainsupershopmanagement.model.Branchstock;
import com.idb.chainsupershopmanagement.service.BranchsaleDetailService;
import com.idb.chainsupershopmanagement.service.BranchstockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class BranchsaledetailController {
    
    @Autowired
    private BranchsaleDetailService branchsaleDetailService;
    @Autowired
    private BranchstockService branchstockservice; 
    
    @GetMapping("/branchsaledetail")
    public List<Branchsaledetail> getAllBranchsaledetail(){
        return branchsaleDetailService.viewAllBranchsaledetail();
    }
    
    @GetMapping("/branchsaledetail/{bsaledetid}")
    public ResponseEntity<Branchsaledetail> getOneBranchsaledetail(@PathVariable("bsaledetid") int bsaledetid){
        Branchsaledetail bsaledet = branchsaleDetailService.viewOneBranchsaledetail(bsaledetid);
        if (bsaledet == null){
            return new ResponseEntity<Branchsaledetail>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Branchsaledetail>(bsaledet, HttpStatus.OK);
    }
    
    @PostMapping("/branchsaledetail")
    public Branchsaledetail createBranchsaledetail(@RequestBody Branchsaledetail bsaledet){
        System.out.println("/branchsaledetail start");
        Branchsaledetail bsaledet2 = branchsaleDetailService.insertBranchsaledetail(bsaledet);;
        System.out.println("/branchsaledetail end");
        return bsaledet2;
    }
    
    @PutMapping("/branchsaledetail/{bsaledetid}")
    public ResponseEntity<Branchsaledetail> updatePurchasedetails(@PathVariable("bsaledetid") int bsaledetid, @RequestBody Branchsaledetail branchsaledetail){
        
        
        Branchsaledetail currentBranchsaledetail = branchsaleDetailService.viewOneBranchsaledetail(bsaledetid);
        this.UpBranchsstockforup(branchsaledetail);
        if (currentBranchsaledetail == null){
            return new ResponseEntity<Branchsaledetail>(HttpStatus.NOT_FOUND);
        }
        
        currentBranchsaledetail.setBsaledetid(branchsaledetail.getBsaledetid());
        currentBranchsaledetail.setBsaleid(branchsaledetail.getBsaleid());
        currentBranchsaledetail.setPid(branchsaledetail.getPid());
        currentBranchsaledetail.setSaleqty(branchsaledetail.getSaleqty());
        currentBranchsaledetail.setSalerate(branchsaledetail.getSalerate());
        currentBranchsaledetail.setSubtotal(branchsaledetail.getSubtotal());
     
        branchsaleDetailService.updateBranchsaledetail(currentBranchsaledetail);
        
        
        return new ResponseEntity<Branchsaledetail>(currentBranchsaledetail, HttpStatus.OK);
    }
    
    @DeleteMapping("/branchsaledetail/{bsaledetid}")
    public ResponseEntity<Branchsaledetail> deleteProduct(@PathVariable("bsaledetid") int bsaledetid){
        
        Branchsaledetail bsaledet = branchsaleDetailService.viewOneBranchsaledetail(bsaledetid);
        this.UpBranchsstockfordel(bsaledetid);
        if (bsaledet == null){
            return new ResponseEntity<Branchsaledetail>(HttpStatus.NOT_FOUND);
        }
        branchsaleDetailService.deleteBranchsaledetail(bsaledetid);
        
        return new ResponseEntity<Branchsaledetail>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/branchsaledetail/upbranchstock")
    public ResponseEntity<Branchstock> UpBranchsstock(@RequestBody Branchsaledetail bsaledet){
        System.out.println("/branchsaledetail/upbranchstock start");
        
        Branchstock currentbstock = branchsaleDetailService.GetBranchstock(bsaledet);
        
        if (bsaledet == null){
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }
        
        currentbstock.setBstockid(currentbstock.getBstockid());
        currentbstock.setBranchid(currentbstock.getBranchid());
        currentbstock.setPid(currentbstock.getPid());
        currentbstock.setBstockqty(currentbstock.getBstockqty()- bsaledet.getSaleqty());
        
        branchstockservice.updateBranchstock(currentbstock);
        
         System.out.println("/branchsaledetail/upbranchstock end");
        
        return new ResponseEntity<Branchstock>(currentbstock, HttpStatus.OK);
    }
    
    //@PutMapping("/upbranchstockforup")
    public ResponseEntity<Branchstock> UpBranchsstockforup(@RequestBody Branchsaledetail bsaledet){
        
        
        
        Branchstock currentbstock = branchsaleDetailService.GetBranchstock(bsaledet);
 
        Branchsaledetail currentBranchsaledetail = branchsaleDetailService.viewOneBranchsaledetail(bsaledet.getBsaledetid());
        
        if (bsaledet == null){
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }
        
        currentbstock.setBstockid(currentbstock.getBstockid());
        currentbstock.setBranchid(currentbstock.getBranchid());
        currentbstock.setPid(currentbstock.getPid());
        currentbstock.setBstockqty(currentbstock.getBstockqty()-bsaledet.getSaleqty()+currentBranchsaledetail.getSaleqty());
        
        branchstockservice.updateBranchstock(currentbstock);
        
        return new ResponseEntity<Branchstock>(currentbstock, HttpStatus.OK);
    }
    
    //@PutMapping("/upbranchstockfordel")
    public ResponseEntity<Branchstock> UpBranchsstockfordel(int bsaledet){
        
         Branchsaledetail currentBranchsaledetail = branchsaleDetailService.viewOneBranchsaledetail(bsaledet);
        
        Branchstock currentbstock = branchsaleDetailService.GetBranchstock(currentBranchsaledetail);
        
        if (currentBranchsaledetail == null){
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }
        
        currentbstock.setBstockid(currentbstock.getBstockid());
        currentbstock.setBranchid(currentbstock.getBranchid());
        currentbstock.setPid(currentbstock.getPid());
        currentbstock.setBstockqty(currentbstock.getBstockqty()+currentBranchsaledetail.getSaleqty());
        
        branchstockservice.updateBranchstock(currentbstock);
        
        return new ResponseEntity<Branchstock>(currentbstock, HttpStatus.OK);
    }
}
