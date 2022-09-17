/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    
    public List<Product> viewAllProduct();
    
    public List<Product> viewAllProductName();
    
    public Product viewOneProduct(int prid);
    
    public Product viewProductByName(String pname);
    
    public Product insertProduct(Product product);
    
    public void updateProduct(Product product);
    
    public void deleteProduct(int prid);
}
