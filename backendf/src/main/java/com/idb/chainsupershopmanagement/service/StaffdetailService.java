/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Staffdetail;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StaffdetailService {
    
    public List<Staffdetail> viewAllStaffdetail();
    
    public Staffdetail viewOneStaffdetail(int staffid);
    
    public List<Staffdetail> viewStaffdetailByBranchId(int branchid);
    
    public Staffdetail insertStaffdetail(Staffdetail staffdetail);
    
    public void updateStaffdetail(Staffdetail staffdetail);
    
    public void deleteStaffdetail(int staffid);
    
}
