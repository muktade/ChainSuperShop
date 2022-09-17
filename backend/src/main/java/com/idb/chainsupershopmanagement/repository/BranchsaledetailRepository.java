/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchsale;
import com.idb.chainsupershopmanagement.model.Branchsaledetail;
import com.idb.chainsupershopmanagement.model.Branchstock;
import com.idb.chainsupershopmanagement.service.BranchsaleDetailService;
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
public class BranchsaledetailRepository implements BranchsaleDetailService {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Branchsaledetail> viewAllBranchsaledetail() {
        Session session = sessionFactory.getCurrentSession();
        List<Branchsaledetail> bsaledet = session.createQuery("from Branchsaledetail").list();
        return bsaledet;
    }

    @Override
    public Branchsaledetail viewOneBranchsaledetail(int bsaledetid) {
        Session session = sessionFactory.getCurrentSession();
        Criteria crit = session.createCriteria(Branchsaledetail.class);
        crit.add(Restrictions.eq("bsaledetid", bsaledetid));
        Branchsaledetail bsaledet = (Branchsaledetail) crit.uniqueResult();
        return bsaledet;
    }

    @Override
    public Branchsaledetail insertBranchsaledetail(Branchsaledetail bsaledet) {

        Session session = sessionFactory.getCurrentSession();
        session.save(bsaledet);
        return bsaledet;
    }

    @Override
    public void updateBranchsaledetail(Branchsaledetail bsaledet) {

        Session session = sessionFactory.getCurrentSession();

        session.update(bsaledet);

    }

    @Override
    public void deleteBranchsaledetail(int bsaledetid) {

        Session session = sessionFactory.getCurrentSession();

        Branchsaledetail bsaledet = (Branchsaledetail) session.get(Branchsaledetail.class, bsaledetid);
        session.delete(bsaledet);

    }

    @Override
    public Branchstock GetBranchstock(Branchsaledetail bsaledet) {

        Session session = sessionFactory.getCurrentSession();

        Branchsale bsale = (Branchsale) session.get(Branchsale.class, bsaledet.getBsaleid());

        Criteria crit = session.createCriteria(Branchstock.class);
        crit.add(Restrictions.eq("branchid", bsale.getBranchid()));
        crit.add(Restrictions.eq("pid", bsaledet.getPid()));
        Branchstock bstock = (Branchstock) crit.uniqueResult();

        return bstock;
    }

}
