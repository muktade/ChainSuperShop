/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Issueproduct;
import com.idb.chainsupershopmanagement.service.IssueproductService;
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
public class IssueproductRepository implements IssueproductService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Issueproduct> viewAllIssueproduct() {
        Session session = entityManager.unwrap(Session.class);
        List<Issueproduct> issueproductlist = session.createQuery("from Issueproduct").list();
        
        return issueproductlist;
    }

    @Override
    public Issueproduct viewOneIssueproduct(int issueid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Issueproduct.class);
        crit.add(Restrictions.eq("issueid", issueid));
        Issueproduct issueProduct = (Issueproduct)crit.uniqueResult();
        
        return issueProduct;
    }

    @Override
    public Issueproduct insertIssueproduct(Issueproduct issueproduct) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(issueproduct);
        
        return issueproduct;
    }

    @Override
    public void updateIssueproduct(Issueproduct issueproduct) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(issueproduct);
    }

    @Override
    public void deleteIssueproduct(int issueid) {
        
        Session session = entityManager.unwrap(Session.class);
        Issueproduct issueproduct = (Issueproduct)session.get(Issueproduct.class, issueid);
        session.delete(issueproduct);
    }
    
}
