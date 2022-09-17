/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Branchinfo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BranchService {
    
    public List<Branchinfo> viewAllBranch();
    
    public List<Branchinfo> viewAllBranchLocation();
    
    public Branchinfo viewOneBranch(int bid);
    
    public Branchinfo viewBranchByLocation(String bname);
    
    public Branchinfo insertBranchLocation(Branchinfo branch);
    
    public void updateBranch(Branchinfo branch);
    
    public void deleteBranch(int bid);
}
