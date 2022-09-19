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
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Transactional
@Repository
public class PcategoryRepository implements PcategoryService{

    @Autowired
    private EntityManager entityManager;
    
    @Override
    public List<Pcategory> viewAllPcategory() {
        Session session = entityManager.unwrap(Session.class);
        List<Pcategory> pcatlist = session.createQuery("from Pcategory").list();
        
        return pcatlist;
    }

    @Override
    public Pcategory viewOneCategory(int catid) {
        Session session = entityManager.unwrap(Session.class);
        Pcategory pcat = (Pcategory)session.get(Pcategory.class, catid);

        return pcat;
    }

    @Override
    public Pcategory viewCategoryByName(String cname) {
        Session session = entityManager.unwrap(Session.class);

        Criteria crit = session.createCriteria(Pcategory.class);
        crit.add(Restrictions.eq("catname", cname));
        Pcategory pcat = (Pcategory)crit.uniqueResult();

        return pcat;
    }

    @Override
    public Pcategory insertCategory(Pcategory pcat) {
        Session session = entityManager.unwrap(Session.class);
        System.out.println("hi im session57 :" +session);
        System.out.println("name: " +pcat.getCatname() +" : " +pcat.getCatdesc());
        session.save(pcat);
        return pcat;
    }

    @Override
    public void deleteCategory(int catid) {
        Session session = entityManager.unwrap(Session.class);

        Pcategory pcat = (Pcategory)session.get(Pcategory.class, catid);
        session.delete(pcat);
    }

    @Override
    public void updateCategory(Pcategory pcat) {
        Session session = entityManager.unwrap(Session.class);

        session.update(pcat);
    }

    @Override
    public List<Pcategory> viewAllPcategoryName() {
        System.out.println("i am Session : ok");

        Session session = entityManager.unwrap(Session.class);
        System.out.println("i am Session :" +session);
        List<Pcategory> pcatlist = session.createQuery("select p from Pcategory p").list();
        
        return pcatlist;
    }

    
}
