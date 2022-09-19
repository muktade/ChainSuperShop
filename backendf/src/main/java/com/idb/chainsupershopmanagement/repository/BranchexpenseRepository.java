/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchexpense;
import com.idb.chainsupershopmanagement.service.BranchexpenseService;
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
public class BranchexpenseRepository implements BranchexpenseService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Branchexpense> viewAllBranchexpense() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Branchexpense> bexplist = session.createQuery("from Branchexpense").list();

        return bexplist;
    }

    @Override
    public Branchexpense viewOneBranchexpense(int bexpid) {
        
        Session session = entityManager.unwrap(Session.class);

        Branchexpense branchexp = (Branchexpense)session.get(Branchexpense.class, bexpid);
        
        return branchexp;
    }

    @Override
    public List<Branchexpense> viewOneBranchexpenseByBranchid(int branchid) {
        
        Session session = entityManager.unwrap(Session.class);

        Criteria crit = session.createCriteria(Branchexpense.class);
        crit.add(Restrictions.eq("branchid", branchid));
        List<Branchexpense> branchexp = crit.list();

        return branchexp;
    }

    @Override
    public Branchexpense insertBranchexpense(Branchexpense branchexp) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(branchexp);

        return branchexp;
    }

    @Override
    public void updateBranchexpense(Branchexpense branch) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(branch);
    }

    @Override
    public void deleteBranchexpense(int bexpid) {
        Session session = entityManager.unwrap(Session.class);
        Branchexpense branch = (Branchexpense)session.get(Branchexpense.class, bexpid);
        session.delete(branch);
    }
    
}
