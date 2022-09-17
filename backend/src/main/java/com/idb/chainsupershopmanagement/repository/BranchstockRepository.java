/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchstock;
import com.idb.chainsupershopmanagement.service.BranchstockService;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class BranchstockRepository implements BranchstockService {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Branchstock> viewAllBranchstock() {

        Session session = sessionFactory.getCurrentSession();
        
        List<Branchstock> bstocklist = session.createQuery("from Branchstock").list();

        return bstocklist;
    }

    @Override
    public Branchstock viewOneBranchstock(int bstockid) {

        Session session = sessionFactory.getCurrentSession();
        
        Criteria crit = session.createCriteria(Branchstock.class);
        crit.add(Restrictions.eq("bstockid", bstockid));
        Branchstock bstock = (Branchstock) crit.uniqueResult();

        return bstock;
    }

    @Override
    public List<Branchstock> viewOneBranchstockByBranchid(int branchid) {

        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Branchstock.class);
        crit.add(Restrictions.eq("branchid", branchid));
        List<Branchstock> bstock = crit.list();
        return bstock;
    }

    @Override
    public Branchstock insertBranchstock(Branchstock bstock) {

        Session session = sessionFactory.getCurrentSession();

        session.save(bstock);

        return bstock;
    }

    @Override
    public void updateBranchstock(Branchstock bstock) {
        
        Session session = sessionFactory.getCurrentSession();
        session.update(bstock);
        
    }

    @Override
    public void deleteBranchstock(int bstockid) {

        Session session = sessionFactory.getCurrentSession();
        Branchstock bstock = (Branchstock) session.get(Branchstock.class, bstockid);
        session.delete(bstock);
    }

//    @Override
//    @Transactional
//    public Branchstock dynamicInsertBranchstock(Branchstock bstock) {
//
//        Session session = sessionFactory.openSession();
//        Query query = session.createQuery("from Branchstock bstock where bstock.branchid = :branchid and bstock.pid= :pid");
//        query.setParameter("branchid", bstock.getBranchid());
//        query.setParameter("pid", bstock.getPid());
//        Branchstock newbstock = (Branchstock) query.uniqueResult();
//
//        if (newbstock != null) {
//            
//            newbstock.setBstockid(newbstock.getBstockid());
//            newbstock.setBranchid(bstock.getBranchid());
//            newbstock.setBstockqty(bstock.getBstockqty());
//            newbstock.setPid(bstock.getPid());
//
//            session.saveOrUpdate(newbstock);
//            
//        } else {
//            
//            session.save(bstock);
//        }
//        session.close();
//
//        return newbstock;
//    }
    
    @Override
    public Branchstock dynamicInsertBranchstock(Branchstock bstock) {

        Session session = sessionFactory.getCurrentSession();
        
        Query query = session.createQuery("from Branchstock bstock where bstock.branchid = :branchid and bstock.pid= :pid");
        query.setParameter("branchid", bstock.getBranchid());
        query.setParameter("pid", bstock.getPid());
        
//        Criteria crit = session.createCriteria(Branchstock.class);
//        crit.add(Restrictions.eq("branchid", bstock.getBranchid()));
//        crit.add(Restrictions.eq("pid", bstock.getPid()));
        
        Branchstock newbstock = (Branchstock) query.uniqueResult();
        
       // Branchstock newbstock = (Branchstock) crit.setMaxResults(1).uniqueResult();

        return newbstock;
    }

}
