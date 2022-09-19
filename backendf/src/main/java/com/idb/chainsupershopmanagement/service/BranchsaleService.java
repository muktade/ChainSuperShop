
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Branchsale;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface BranchsaleService {
    
    public List<Branchsale> viewAllBranchsale();
    
    public Branchsale viewOneBranchsale(int bsaleid);
    
    public List<Branchsale> viewBranchsaleByDate(Date saledate);
    
    public Branchsale insertBranchsale(Branchsale bsale);
    
    public void updateBranchsale(Branchsale bsale);
    
    public void deleteBranchsale(int bsaleid);
}
