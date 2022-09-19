/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Purchase;
import com.idb.chainsupershopmanagement.service.PurchaseService;
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
public class PurchaseRepository implements PurchaseService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Purchase> viewAllPurchase() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Purchase> purlist = session.createQuery("from Purchase").list();
        return purlist;
    }

    @Override
    public Purchase viewOnePurchase(int purid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Purchase.class);
        crit.add(Restrictions.eq("purid", purid));
        Purchase pur = (Purchase)crit.uniqueResult();

        return pur;
    }

    @Override
    public List<Purchase> viewPurchaseByDate(Date purdate) {
        
        Session session = entityManager.unwrap(Session.class);

        Criteria crit = session.createCriteria(Purchase.class);
        crit.add(Restrictions.eq("purdate", purdate));
        List<Purchase> pur = crit.list();

        return pur;
    }

    @Override
    public Purchase insertPurchase(Purchase pur) {
        
        Session session = entityManager.unwrap(Session.class);

        session.save(pur);
        
        return pur;
    }

    @Override
    public void updatePurchase(Purchase pur) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(pur);
    }

    @Override
    public void deletePurchase(int purid) {
        
        Session session = entityManager.unwrap(Session.class);
        Purchase pur = (Purchase)session.get(Purchase.class, purid);
        session.delete(pur);
    }
    
    
}
