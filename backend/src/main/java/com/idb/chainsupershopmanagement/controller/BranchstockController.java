/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Branchstock;
import com.idb.chainsupershopmanagement.service.BranchstockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class BranchstockController {

    @Autowired
    private BranchstockService branchstockService;

    @GetMapping("/branchstock")
    public List<Branchstock> getAllBranchstock() {
        return branchstockService.viewAllBranchstock();
    }

    @GetMapping("/branchstock/{bstockid}")
    public ResponseEntity<Branchstock> getOneBranchstock(@PathVariable("bstockid") int bstockid) {
        Branchstock bstock = branchstockService.viewOneBranchstock(bstockid);
        if (bstock == null) {
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Branchstock>(bstock, HttpStatus.OK);
    }

    @GetMapping("/branchstock/product/{branchid}")
    public ResponseEntity<List<Branchstock>> getBranchstockByBranchid(@PathVariable("branchid") int branchid) {
        List<Branchstock> bstock = branchstockService.viewOneBranchstockByBranchid(branchid);
        if (bstock == null) {
            return new ResponseEntity<List<Branchstock>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Branchstock>>(bstock, HttpStatus.OK);
    }

    @PostMapping("/branchstock")
    public Branchstock createBranchstock(@RequestBody Branchstock bstock) {
        return branchstockService.insertBranchstock(bstock);
    }

    @PutMapping("/branchstock/{bstockid}")
    public ResponseEntity<Branchstock> updateBranchstock(@PathVariable("bstockid") int bstockid, @RequestBody Branchstock bstock) {

        Branchstock currentbstock = branchstockService.viewOneBranchstock(bstockid);

        if (currentbstock == null) {
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }

        currentbstock.setBstockid(bstock.getBstockid());
        currentbstock.setBranchid(bstock.getBranchid());
        currentbstock.setPid(bstock.getPid());
        currentbstock.setBstockqty(bstock.getBstockqty());

        branchstockService.updateBranchstock(currentbstock);

        return new ResponseEntity<Branchstock>(currentbstock, HttpStatus.OK);
    }

    @DeleteMapping("/branchstock/{bstockid}")
    public ResponseEntity<Branchstock> deleteBranchstock(@PathVariable("bstockid") int bstockid) {
        Branchstock bstock = branchstockService.viewOneBranchstock(bstockid);
        if (bstock == null) {
            return new ResponseEntity<Branchstock>(HttpStatus.NOT_FOUND);
        }
        branchstockService.deleteBranchstock(bstockid);
        return new ResponseEntity<Branchstock>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/dynamicinsertbstock")
    public ResponseEntity<Branchstock> dynamicUpdateBranchstock(@RequestBody Branchstock bstock) {

        Branchstock currentbstock = branchstockService.dynamicInsertBranchstock(bstock);

        if (currentbstock != null) {

            currentbstock.setBstockid(currentbstock.getBstockid());
            currentbstock.setBranchid(bstock.getBranchid());
            currentbstock.setPid(bstock.getPid());
            currentbstock.setBstockqty(currentbstock.getBstockqty()+bstock.getBstockqty());

            branchstockService.updateBranchstock(currentbstock);

            return new ResponseEntity<Branchstock>(currentbstock, HttpStatus.OK);

        } else {

            branchstockService.insertBranchstock(bstock);
            return new ResponseEntity<Branchstock>(bstock, HttpStatus.OK);
        }
    }

//    @PostMapping("/dynamicinsertbstock")
//    public Branchstock dynamicInsertBranchstock(@RequestBody Branchstock bstock){
//        return branchstockService.insertBranchstock(bstock);
//    }
}
