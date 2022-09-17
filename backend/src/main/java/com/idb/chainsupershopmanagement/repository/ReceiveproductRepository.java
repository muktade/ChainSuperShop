/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Receiveproduct;
import com.idb.chainsupershopmanagement.service.ReceiveproductService;
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
public class ReceiveproductRepository implements ReceiveproductService{
    
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Receiveproduct> viewAllReceiveproduct() {
        
        Session session = sessionFactory.getCurrentSession();
        List<Receiveproduct> receiveproductlist = session.createQuery("from Receiveproduct").list();
        
        return receiveproductlist;
    }

    @Override
    public Receiveproduct viewOneReceiveproduct(int recid) {
        
        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Receiveproduct.class);
        crit.add(Restrictions.eq("recid", recid));
        Receiveproduct receiveproduct = (Receiveproduct)crit.uniqueResult();
        
        return receiveproduct;
    }

    @Override
    public Receiveproduct insertReceiveproduct(Receiveproduct receiveproduct) {
        
        Session session = sessionFactory.getCurrentSession();
        session.save(receiveproduct);
        
        return receiveproduct;
    }

    @Override
    public void updateReceiveproduct(Receiveproduct receiveproduct) {
        
        Session session = sessionFactory.getCurrentSession();
        session.update(receiveproduct);
    }

    @Override
    public void deleteReceiveproduct(int recid) {
        
        Session session = sessionFactory.getCurrentSession();
        Receiveproduct receiveproduct = (Receiveproduct)session.get(Receiveproduct.class, recid);
        session.delete(receiveproduct);
    }
    
}
