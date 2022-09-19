/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Mainstock;
import com.idb.chainsupershopmanagement.service.MainstockService;
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
public class MainstockRepository implements MainstockService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Mainstock> viewAllMainstock() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Mainstock> mstocklist = session.createQuery("from Mainstock").list();
        
        return mstocklist;
    }

    @Override
    public Mainstock viewOneMainstock(int mstockid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Mainstock.class);
        crit.add(Restrictions.eq("mstockid", mstockid));
        Mainstock mstock = (Mainstock)crit.uniqueResult();
        
        return mstock;
    }
    
    @Override
    public Mainstock viewOneMainstockByPid(int pid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Mainstock.class);
        crit.add(Restrictions.eq("pid", pid));
        Mainstock mstock = (Mainstock)crit.uniqueResult();
        
        return mstock;
    }

    @Override
    public Mainstock insertMainstock(Mainstock mstock) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(mstock);
        
        return mstock;
    }

    @Override
    public void updateMainstock(Mainstock mstock) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(mstock);
    }

    @Override
    public void deleteMainstock(int mstockid) {
        
        Session session = entityManager.unwrap(Session.class);
        Mainstock mstock = (Mainstock)session.get(Mainstock.class, mstockid);
        session.delete(mstock);
    }

    
    
}
