/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Mainstock;
import com.idb.chainsupershopmanagement.service.MainstockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class MainstockController {
    
    @Autowired
    private MainstockService mainstockService;
    
    @GetMapping("/mainstock")
    public List<Mainstock> getAllMainstock(){
        return mainstockService.viewAllMainstock();
    }
    
    @GetMapping("/mainstock/{mstockid}")
    public ResponseEntity<Mainstock> getOneMainstock(@PathVariable("mstockid") int mstockid){
        Mainstock mstock = mainstockService.viewOneMainstock(mstockid);
        if (mstock == null){
            return new ResponseEntity<Mainstock>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Mainstock>(mstock, HttpStatus.OK);
    }
    
    @GetMapping("/mainstock/product/{pid}")
    public ResponseEntity<Integer> getProductByName(@PathVariable("pid") int pid){
        Mainstock mstock = mainstockService.viewOneMainstockByPid(pid);
        if (mstock == null){
            return new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Integer>(mstock.getStockqty(), HttpStatus.OK);
    }
    
    @PostMapping("/mainstock")
    public Mainstock createProduct(@RequestBody Mainstock mstock){
        return mainstockService.insertMainstock(mstock);
    }
    
    @PutMapping("/mainstock/{mstockid}")
    public ResponseEntity<Mainstock> updateProduct(@PathVariable("mstockid") int mstockid, @RequestBody Mainstock mstock){
        
        Mainstock currentmstock = mainstockService.viewOneMainstock(mstockid);
        
        if (currentmstock == null){
            return new ResponseEntity<Mainstock>(HttpStatus.NOT_FOUND);
        }
        
        currentmstock.setMstockid(mstock.getMstockid());
        currentmstock.setPid(mstock.getPid());
        currentmstock.setStockqty(mstock.getStockqty());
        
        mainstockService.updateMainstock(currentmstock);
        
        return new ResponseEntity<Mainstock>(currentmstock, HttpStatus.OK);
    }
    
    @DeleteMapping("/mainstock/{mstockid}")
    public ResponseEntity<Mainstock> deleteProduct(@PathVariable("mstockid") int mstockid){
        Mainstock mstock = mainstockService.viewOneMainstock(mstockid);
        if (mstock == null){
            return new ResponseEntity<Mainstock>(HttpStatus.NOT_FOUND);
        }
        mainstockService.deleteMainstock(mstockid);
        return new ResponseEntity<Mainstock>(HttpStatus.NO_CONTENT);
    }
}
