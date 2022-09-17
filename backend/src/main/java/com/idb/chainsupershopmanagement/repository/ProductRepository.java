/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Product;
import com.idb.chainsupershopmanagement.service.ProductService;
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
public class ProductRepository implements ProductService{
    
    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Product> viewAllProduct() {
        
        Session session = sessionFactory.getCurrentSession();
        List<Product> plist = session.createQuery("from Product").list();
        
        return plist;
    }

    @Override
    public Product viewOneProduct(int prid) {
        
        Session session = sessionFactory.getCurrentSession();
        Product product = (Product)session.get(Product.class, prid);
        
        return product;
    }

    @Override
    public Product viewProductByName(String pname) {
        
        Session session = sessionFactory.getCurrentSession();

        Criteria crit = session.createCriteria(Product.class);
        crit.add(Restrictions.eq("pname", pname));
        Product product = (Product)crit.uniqueResult();
        
        return product;
    }

    @Override
    public Product insertProduct(Product product) {
        
        Session session = sessionFactory.getCurrentSession();

        session.save(product);
        return product;
    }

    @Override
    public void updateProduct(Product product) {
        
        Session session = sessionFactory.getCurrentSession();

        session.update(product);
    }

    @Override
    public void deleteProduct(int prid) {
        Session session = sessionFactory.getCurrentSession();
        Product product = (Product)session.get(Product.class, prid);
        session.delete(product);
    }

    @Override
    public List<Product> viewAllProductName() {
        Session session = sessionFactory.getCurrentSession();
        List<Product> plist = session.createQuery("select p.pname from Product p").list();

        return plist;
    }
    
}
