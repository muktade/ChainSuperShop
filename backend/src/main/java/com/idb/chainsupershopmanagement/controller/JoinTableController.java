/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Branchsale;
import com.idb.chainsupershopmanagement.model.Issuedetails;
import com.idb.chainsupershopmanagement.service.JoinTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class JoinTableController {
    
    @Autowired
    private JoinTableService joinTableService;
    
    @GetMapping("/productwithcatname")
    public List<Object[]> getAllProductAndCategory(){
        return joinTableService.getAllProductWithCatName();
    }
    
    @GetMapping("/productpurchasedetails")
    public List<Object[]> getAllProductAndPurchaseAndPurchasedetail(){
        return joinTableService.getAllProductAndPurchaseAndPurchaseDetail(); 
    }
    
    @GetMapping("/mainstockdetails")
    public List<Object[]> getAllMainStockDetail(){
        return joinTableService.getMainStockDetails(); 
    }
    
    @GetMapping("/issueproductdetailwithproductandbranch")
    public List<Object[]> getAllIssueproductdetailwithproductandbranch(){
        return joinTableService.getIssueproductDetailsWithProductAndBranch(); 
    }
    
    @GetMapping("/issueproductpendingbybranchid/{bid}")
    public List<Issuedetails> getAllIssueproductdetailwithproduct(@PathVariable("bid") int bid){
        return joinTableService.getIssueproductDetailsWithProductBranch(bid);
    }
    
    @GetMapping("/receivedproductlistwithissuedetails/{bid}")
    public List<Object[]> getReceivedproductlistwithissuedetails(@PathVariable("bid") int bid){
        return joinTableService.getReceivedproductlistwithissuedetails(bid);
    }
    
    @GetMapping("/pendingreceivedproductlist/{bid}")
    public List<Object[]> getPendingReceivedproductlistwithissuedetails(@PathVariable("bid") int bid){
        return joinTableService.getPendingReceivedproductlistwithissuedetails(bid);
    }
    
    @GetMapping("/receivedetailwithproductlist/{bid}")
    public List<Object[]> getReceiveDetailswithissuedetails(@PathVariable("bid") int bid){
        return joinTableService.getReceiveDetailswithissuedetails(bid);
    }
    
    @GetMapping("/branchstockdetails")
    public List<Object[]> getAllBranchStockDetail(){
        return joinTableService.getBranchStockDetails(); 
    }
    
    @GetMapping("/branchstockdetails/byid/{bid}")
    public List<Object[]> getAllBranchStockDetailviaid(@PathVariable("bid") int bid){
        return joinTableService.getBranchStockDetailsViaBranchid(bid); 
    }
    
    @GetMapping("/branchstockdetails/bsale/{bid}")
    public List<Branchsale> getAllBranchsaleidviaid(@PathVariable("bid") int bid){
        return joinTableService.getBranchSaleIDViaBranchid(bid); 
    }
    
    @GetMapping("/branchsaledetailsevery")
    public List<Object[]> getAllBranchSalekDetail(){
        return joinTableService.getBranchSaleDetailsEverything(); 
    }
}
