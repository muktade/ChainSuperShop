/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchinfo;
import com.idb.chainsupershopmanagement.service.BranchService;
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
public class BranchRepository implements BranchService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Branchinfo> viewAllBranch() {
        Session session = entityManager.unwrap(Session.class);
        List<Branchinfo> branchlist = session.createQuery("from Branchinfo").list();
        
        return branchlist;
    }

    @Override
    public List<Branchinfo> viewAllBranchLocation() {
        Session session = entityManager.unwrap(Session.class);
        List<Branchinfo> branchlist = session.createQuery("select b.blocation from Branchinfo b").list();
        
        return branchlist;
    }

    @Override
    public Branchinfo viewOneBranch(int bid) {
        Session session = entityManager.unwrap(Session.class);
        Branchinfo branch = (Branchinfo)session.get(Branchinfo.class, bid);
        
        return branch;
    }

    @Override
    public Branchinfo viewBranchByLocation(String bname) {
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Branchinfo.class);
        crit.add(Restrictions.eq("blocation", bname));
        Branchinfo branch = (Branchinfo)crit.uniqueResult();
        
        return branch;
    }

    @Override
    public Branchinfo insertBranchLocation(Branchinfo branch) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(branch);
        
        return branch;
    }

    @Override
    public void updateBranch(Branchinfo branch) {
        Session session = entityManager.unwrap(Session.class);
        session.update(branch);
    }

    @Override
    public void deleteBranch(int bid) {
        Session session = entityManager.unwrap(Session.class);
        Branchinfo branch = (Branchinfo)session.get(Branchinfo.class, bid);
        session.delete(branch);
    }
    
}
