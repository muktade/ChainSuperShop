/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchsale;
import com.idb.chainsupershopmanagement.service.BranchsaleService;
import org.hibernate.Criteria;
import org.hibernate.Session;
import javax.persistence.EntityManager;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Transactional
@Repository
public class BranchsaleRepository implements BranchsaleService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Branchsale> viewAllBranchsale() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Branchsale> bsalelist = session.createQuery("from Branchsale").list();
        
        return bsalelist;
    }

    @Override
    public Branchsale viewOneBranchsale(int bsaleid) {
        
        Session session = entityManager.unwrap(Session.class);

        Criteria crit = session.createCriteria(Branchsale.class);
        crit.add(Restrictions.eq("bsaleid", bsaleid));
        Branchsale bsale = (Branchsale)crit.uniqueResult();
        
        return bsale;
    }

    @Override
    public List<Branchsale> viewBranchsaleByDate(Date saledate) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Branchsale.class);
        crit.add(Restrictions.eq("saledate", saledate));
        List<Branchsale> bsale = crit.list();

        return bsale;
    }

    @Override
    public Branchsale insertBranchsale(Branchsale bsale) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(bsale);
        
        return bsale;
    }

    @Override
    public void updateBranchsale(Branchsale bsale) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(bsale);
    }

    @Override
    public void deleteBranchsale(int bsaleid) {
        
        Session session = entityManager.unwrap(Session.class);
        Branchsale bsale = (Branchsale)session.get(Branchsale.class, bsaleid);
        session.delete(bsale);
    }
    
}
