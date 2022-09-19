/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Receivedetail;
import com.idb.chainsupershopmanagement.service.ReceivedetailService;
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
public class ReceivedetailRepository implements ReceivedetailService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Receivedetail> viewAllReceivedetail() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Receivedetail> receivedetaillist = session.createQuery("from Receivedetail").list();
        
        return receivedetaillist;
    }

    @Override
    public Receivedetail viewOneReceivedetail(int recdetid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Receivedetail.class);
        crit.add(Restrictions.eq("recdetid", recdetid));
        Receivedetail receivedetail = (Receivedetail)crit.uniqueResult();
        
        return receivedetail;
    }

    @Override
    public Receivedetail insertReceivedetail(Receivedetail receivedetail) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(receivedetail);
        
        return receivedetail;
    }

    @Override
    public void updateReceivedetail(Receivedetail receivedetail) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(receivedetail);
    }

    @Override
    public void deleteReceivedetail(int recdetid) {
        
        Session session = entityManager.unwrap(Session.class);
        Receivedetail receivedetail = (Receivedetail)session.get(Receivedetail.class, recdetid);
        session.delete(receivedetail);
    }
    
    
    
}
