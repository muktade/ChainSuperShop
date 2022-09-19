/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Purchasedetails;
import com.idb.chainsupershopmanagement.service.PurchaseDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class PurchasedetailsController {
    
    @Autowired
    private PurchaseDetailsService purchaseDetailsService;
    
    @GetMapping("/purchasedetails")
    public List<Purchasedetails> getAllPurchasedetails(){
        return purchaseDetailsService.viewAllPurchasedetails();
    }
    
    @GetMapping("/purchasedetails/{purdetid}")
    public ResponseEntity<Purchasedetails> getOnePurchasedetails(@PathVariable("purdetid") int purdetid){
        Purchasedetails purchasedetails = purchaseDetailsService.viewOnePurchasedetails(purdetid);
        if (purchasedetails == null){
            return new ResponseEntity<Purchasedetails>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Purchasedetails>(purchasedetails, HttpStatus.OK);
    }
    
    @PostMapping("/purchasedetails")
    public Purchasedetails createPurchasedetails(@RequestBody Purchasedetails purchase){
        return purchaseDetailsService.insertPurchasedetails(purchase);
    }
    
    @PutMapping("/purchasedetails/{purdetid}")
    public ResponseEntity<Purchasedetails> updatePurchasedetails(@PathVariable("purdetid") int purdetid, @RequestBody Purchasedetails purchasedetails){
        
        Purchasedetails currentPurchasedetails = purchaseDetailsService.viewOnePurchasedetails(purdetid);
        
        if (currentPurchasedetails == null){
            return new ResponseEntity<Purchasedetails>(HttpStatus.NOT_FOUND);
        }
        
        currentPurchasedetails.setPurdetid(purchasedetails.getPurdetid());
        currentPurchasedetails.setPurid(purchasedetails.getPurid());
        currentPurchasedetails.setPid(purchasedetails.getPid());
        currentPurchasedetails.setPurqty(purchasedetails.getPurqty());
        currentPurchasedetails.setPurdate(purchasedetails.getPurdate());
        currentPurchasedetails.setPpricepu(purchasedetails.getPpricepu());
        currentPurchasedetails.setSubtotal(purchasedetails.getSubtotal());
        
        
        purchaseDetailsService.updatePurchasedetails(currentPurchasedetails);
        
        return new ResponseEntity<Purchasedetails>(currentPurchasedetails, HttpStatus.OK);
    }
    
    @DeleteMapping("/purchasedetails/{purdetid}")
    public ResponseEntity<Purchasedetails> deletePurchasedetails(@PathVariable("purdetid") int purdetid){
        Purchasedetails purdet = purchaseDetailsService.viewOnePurchasedetails(purdetid);
        if (purdet == null){
            return new ResponseEntity<Purchasedetails>(HttpStatus.NOT_FOUND);
        }
        purchaseDetailsService.deletePurchasedetails(purdetid);
        return new ResponseEntity<Purchasedetails>(HttpStatus.NO_CONTENT);
    }
}
