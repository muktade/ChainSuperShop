/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Branchstock;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BranchstockService {
    
    public List<Branchstock> viewAllBranchstock();
    
    public Branchstock viewOneBranchstock(int bstockid);
    
    public List<Branchstock> viewOneBranchstockByBranchid(int branchid);
    
    public Branchstock insertBranchstock(Branchstock bstock);
    
    public void updateBranchstock(Branchstock bstock);
    
    public void deleteBranchstock(int bstockid);
    
    public Branchstock dynamicInsertBranchstock(Branchstock bstock);
}
