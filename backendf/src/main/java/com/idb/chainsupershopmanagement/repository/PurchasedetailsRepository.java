/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Purchasedetails;
import com.idb.chainsupershopmanagement.service.PurchaseDetailsService;
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
public class PurchasedetailsRepository implements PurchaseDetailsService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Purchasedetails> viewAllPurchasedetails() {
        Session session = entityManager.unwrap(Session.class);
        List<Purchasedetails> purdetlist = session.createQuery("from Purchasedetails").list();
        
        return purdetlist;
    }

    @Override
    public Purchasedetails viewOnePurchasedetails(int purdetid) {
        Session session = entityManager.unwrap(Session.class);

        Criteria crit = session.createCriteria(Purchasedetails.class);
        crit.add(Restrictions.eq("purdetid", purdetid));
        Purchasedetails purdet = (Purchasedetails)crit.uniqueResult();

        return purdet;
    }

    @Override
    public Purchasedetails insertPurchasedetails(Purchasedetails purdet) {
        Session session = entityManager.unwrap(Session.class);

        session.save(purdet);

        return purdet;
    }

    @Override
    public void updatePurchasedetails(Purchasedetails purdet) {
        Session session = entityManager.unwrap(Session.class);

        session.update(purdet);

    }

    @Override
    public void deletePurchasedetails(int purdetid) {
        Session session = entityManager.unwrap(Session.class);

        Purchasedetails purdet = (Purchasedetails)session.get(Purchasedetails.class, purdetid);
        session.delete(purdet);
    }
    
}
