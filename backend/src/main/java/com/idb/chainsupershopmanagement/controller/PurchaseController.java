
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Purchase;
import com.idb.chainsupershopmanagement.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class PurchaseController {
    
    @Autowired
    private PurchaseService purchaseService;
    
    @GetMapping("/purchase")
    public List<Purchase> getAllPurchase(){
        return purchaseService.viewAllPurchase();
    }
    
    @GetMapping("/purchase/{purid}")
    public ResponseEntity<Purchase> getOnePurchase(@PathVariable("purid") int purid){
        Purchase purchase = purchaseService.viewOnePurchase(purid);
        if (purchase == null){
            return new ResponseEntity<Purchase>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Purchase>(purchase, HttpStatus.OK);
    }
    
    @GetMapping("/purchase/pro/{purdate}")
    public ResponseEntity<List<Purchase>> getPurchaseByDate(@PathVariable("purdate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date purdate){
        List<Purchase> purchase = purchaseService.viewPurchaseByDate(purdate);
        if (purchase == null){
            return new ResponseEntity<List<Purchase>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Purchase>>(purchase, HttpStatus.OK);
    }
    
    @PostMapping("/purchase")
    public Purchase createPurchase(@RequestBody Purchase purchase){
        return purchaseService.insertPurchase(purchase);
    }
    
    @PutMapping("/purchase/{purid}")
    public ResponseEntity<Purchase> updatePurchase(@PathVariable("purid") int purid, @RequestBody Purchase purchase){
        
        Purchase currentPurchase = purchaseService.viewOnePurchase(purid);
        
        if (currentPurchase == null){
            return new ResponseEntity<Purchase>(HttpStatus.NOT_FOUND);
        }
        
        currentPurchase.setPurid(purchase.getPurid());
        currentPurchase.setPurdate(purchase.getPurdate());
        currentPurchase.setEmailid(purchase.getEmailid());
        
        
        purchaseService.updatePurchase(currentPurchase);
        
        return new ResponseEntity<Purchase>(currentPurchase, HttpStatus.OK);
    }
    
    @DeleteMapping("/purchase/{purid}")
    public ResponseEntity<Purchase> deleteProduct(@PathVariable("purid") int purid){
        Purchase purchase = purchaseService.viewOnePurchase(purid);
        if (purchase == null){
            return new ResponseEntity<Purchase>(HttpStatus.NOT_FOUND);
        }
        purchaseService.deletePurchase(purid);
        return new ResponseEntity<Purchase>(HttpStatus.NO_CONTENT);
    }
}
