/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Allincexp;
import com.idb.chainsupershopmanagement.service.AllincexpService;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Transactional
@Repository
public class AllincexpRepository implements AllincexpService{
    
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Allincexp> viewAllincexp() {
        
        Session session = sessionFactory.getCurrentSession();
        List<Allincexp> allincexplist = session.createQuery("from Allincexp").list();
        
        return allincexplist;
    }

    @Override
    public Allincexp viewOneAllincexp(int incexpid) {
        
        Session session = sessionFactory.getCurrentSession();
        Allincexp allincexp = (Allincexp)session.get(Allincexp.class, incexpid);
        
        return allincexp;
    }

    @Override
    public List<Allincexp> viewAllinc(int bsaleid) {
        
        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Allincexp.class);
        crit.add(Restrictions.eq("bsaleid", bsaleid));
        List<Allincexp> allincexp = crit.list();
        
        return allincexp;
    }

    @Override
    public List<Allincexp> viewAllexp(int bexpid) {
        
        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Allincexp.class);
        crit.add(Restrictions.eq("bexpid", bexpid));
        List<Allincexp> allincexp = crit.list();
        
        return allincexp;
    }

    @Override
    public List<Allincexp> Allincexp(Date odate) {
        
        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Allincexp.class);
        crit.add(Restrictions.eq("odate", odate));
        List<Allincexp> allincexp = crit.list();
        
        return allincexp;
    }

    @Override
    public Allincexp insertAllincexp(Allincexp allincexp) {
        
        Session session = sessionFactory.getCurrentSession();
        session.save(allincexp);
        
        return allincexp;
    }

    @Override
    public void updateAllincexp(Allincexp allincexp) {
        
        Session session = sessionFactory.getCurrentSession();
        session.update(allincexp);
    }

    @Override
    public void deleteAllincexp(int incexpid) {
        
        Session session = sessionFactory.getCurrentSession();
        Allincexp allincexp = (Allincexp)session.get(Allincexp.class, incexpid);
        session.delete(allincexp);
    }
    
}
