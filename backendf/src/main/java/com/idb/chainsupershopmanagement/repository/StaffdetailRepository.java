/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Staffdetail;
import com.idb.chainsupershopmanagement.service.StaffdetailService;
import org.hibernate.Criteria;
import org.hibernate.Session;
import javax.persistence.EntityManager;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class StaffdetailRepository implements StaffdetailService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Staffdetail> viewAllStaffdetail() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Staffdetail> stafflist = session.createQuery("from Staffdetail").list();
        
        return stafflist;
    }

    @Override
    public Staffdetail viewOneStaffdetail(int staffid) {
        
        Session session = entityManager.unwrap(Session.class);
        Staffdetail staff = (Staffdetail)session.get(Staffdetail.class, staffid);
        
        return staff;
    }

    @Override
    public List<Staffdetail> viewStaffdetailByBranchId(int branchid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Staffdetail.class);
        crit.add(Restrictions.eq("branchid", branchid));
        List<Staffdetail> staffs = crit.list();
        
        return staffs;
    }

    @Override
    public Staffdetail insertStaffdetail(Staffdetail staffdetail) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(staffdetail);
        
        return staffdetail;
    }

    @Override
    public void updateStaffdetail(Staffdetail staffdetail) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(staffdetail);
    }

    @Override
    public void deleteStaffdetail(int staffid) {
        
        Session session = entityManager.unwrap(Session.class);
        Staffdetail staff = (Staffdetail)session.get(Staffdetail.class, staffid);
        session.delete(staff);
    }
    
}
