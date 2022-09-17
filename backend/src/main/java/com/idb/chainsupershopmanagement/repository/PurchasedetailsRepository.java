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
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class PurchasedetailsRepository implements PurchaseDetailsService{
    
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Purchasedetails> viewAllPurchasedetails() {
        Session session = sessionFactory.getCurrentSession();
        List<Purchasedetails> purdetlist = session.createQuery("from Purchasedetails").list();
        
        return purdetlist;
    }

    @Override
    public Purchasedetails viewOnePurchasedetails(int purdetid) {
        Session session = sessionFactory.getCurrentSession();

        Criteria crit = session.createCriteria(Purchasedetails.class);
        crit.add(Restrictions.eq("purdetid", purdetid));
        Purchasedetails purdet = (Purchasedetails)crit.uniqueResult();

        return purdet;
    }

    @Override
    public Purchasedetails insertPurchasedetails(Purchasedetails purdet) {
        Session session = sessionFactory.getCurrentSession();

        session.save(purdet);

        return purdet;
    }

    @Override
    public void updatePurchasedetails(Purchasedetails purdet) {
        Session session = sessionFactory.getCurrentSession();

        session.update(purdet);

    }

    @Override
    public void deletePurchasedetails(int purdetid) {
        Session session = sessionFactory.getCurrentSession();

        Purchasedetails purdet = (Purchasedetails)session.get(Purchasedetails.class, purdetid);
        session.delete(purdet);
    }
    
}
