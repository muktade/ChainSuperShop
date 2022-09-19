/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Purchasedetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PurchaseDetailsService {
    
    public List<Purchasedetails> viewAllPurchasedetails();
    
    public Purchasedetails viewOnePurchasedetails(int purdetid);
    
    public Purchasedetails insertPurchasedetails(Purchasedetails purdet);
    
    public void updatePurchasedetails(Purchasedetails purdet);
    
    public void deletePurchasedetails(int purdetid);
}
