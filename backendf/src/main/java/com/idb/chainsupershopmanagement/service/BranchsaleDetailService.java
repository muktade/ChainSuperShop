/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Branchsaledetail;
import com.idb.chainsupershopmanagement.model.Branchstock;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BranchsaleDetailService {
    
    public List<Branchsaledetail> viewAllBranchsaledetail();
    
    public Branchsaledetail viewOneBranchsaledetail(int bsaledetid);
    
    public Branchsaledetail insertBranchsaledetail(Branchsaledetail bsaledet);
    
    public void updateBranchsaledetail(Branchsaledetail bsaledet);
    
    public void deleteBranchsaledetail(int bsaledetid);
    
    public Branchstock GetBranchstock(Branchsaledetail bsaledet);
}
