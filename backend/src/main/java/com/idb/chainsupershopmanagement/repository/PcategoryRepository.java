/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Pcategory;
import com.idb.chainsupershopmanagement.service.PcategoryService;
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
public class PcategoryRepository implements PcategoryService{

    @Autowired
    SessionFactory sessionFactory;
    
    @Override
    public List<Pcategory> viewAllPcategory() {
        Session session = sessionFactory.getCurrentSession();
        List<Pcategory> pcatlist = session.createQuery("from Pcategory").list();
        
        return pcatlist;
    }

    @Override
    public Pcategory viewOneCategory(int catid) {
        Session session = sessionFactory.getCurrentSession();
        Pcategory pcat = (Pcategory)session.get(Pcategory.class, catid);

        return pcat;
    }

    @Override
    public Pcategory viewCategoryByName(String cname) {
        Session session = sessionFactory.getCurrentSession();

        Criteria crit = session.createCriteria(Pcategory.class);
        crit.add(Restrictions.eq("catname", cname));
        Pcategory pcat = (Pcategory)crit.uniqueResult();

        return pcat;
    }

    @Override
    public Pcategory insertCategory(Pcategory pcat) {
        Session session = sessionFactory.getCurrentSession();

        session.save(pcat);
        return pcat;
    }

    @Override
    public void deleteCategory(int catid) {
        Session session = sessionFactory.getCurrentSession();

        Pcategory pcat = (Pcategory)session.get(Pcategory.class, catid);
        session.delete(pcat);
    }

    @Override
    public void updateCategory(Pcategory pcat) {
        Session session = sessionFactory.getCurrentSession();

        session.update(pcat);
    }

    @Override
    public List<Pcategory> viewAllPcategoryName() {
        Session session = sessionFactory.getCurrentSession();

        List<Pcategory> pcatlist = session.createQuery("select p from Pcategory p").list();
        
        return pcatlist;
    }

    
}
