/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Branchexpense;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BranchexpenseService{
    
    public List<Branchexpense> viewAllBranchexpense();
    
    public Branchexpense viewOneBranchexpense(int bexpid);
    
    public List<Branchexpense> viewOneBranchexpenseByBranchid(int branchid);
    
    public Branchexpense insertBranchexpense(Branchexpense branchexp);
    
    public void updateBranchexpense(Branchexpense branch);
    
    public void deleteBranchexpense(int bexpid);
}
