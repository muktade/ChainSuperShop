/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Issuedetails;
import com.idb.chainsupershopmanagement.service.IssuedetailsService;
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
public class IssuedetailsRepository implements IssuedetailsService{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Issuedetails> viewAllIssuedetails() {
        
        Session session = entityManager.unwrap(Session.class);
        List<Issuedetails> issuedetailslist = session.createQuery("from Issuedetails").list();
        
        return issuedetailslist;
    }

    @Override
    public Issuedetails viewOneIssuedetails(int issuedetid) {
        
        Session session = entityManager.unwrap(Session.class);
        Criteria crit = session.createCriteria(Issuedetails.class);
        crit.add(Restrictions.eq("issuedetid", issuedetid));
        Issuedetails issueDetail = (Issuedetails)crit.uniqueResult();
        
        return issueDetail;
    }

    @Override
    public Issuedetails insertIssuedetails(Issuedetails issuedetails) {
        
        Session session = entityManager.unwrap(Session.class);
        session.save(issuedetails);
        
        return issuedetails;
    }

    @Override
    public void updateIssuedetails(Issuedetails issuedetails) {
        
        Session session = entityManager.unwrap(Session.class);
        session.update(issuedetails);
    }

    @Override
    public void deleteIssuedetails(int issuedetid) {
        Session session = entityManager.unwrap(Session.class);
        Issuedetails issuedetails = (Issuedetails)session.get(Issuedetails.class, issuedetid);
        session.delete(issuedetails);
    }
    
}
