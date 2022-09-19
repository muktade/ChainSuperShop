/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.controller;

import com.idb.chainsupershopmanagement.model.Product;
import com.idb.chainsupershopmanagement.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping("/product")
    public List<Product> getAllProduct(){
        return productService.viewAllProduct();
    }
    
    @GetMapping("/product/pnamelist")
    public List<Product> getAllProductName(){
        return productService.viewAllProductName();
    }
    
    @GetMapping("/product/{prid}")
    public ResponseEntity<Product> getOneProduct(@PathVariable("prid") int prid){
        Product product = productService.viewOneProduct(prid);
        if (product == null){
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }
    
    @GetMapping("/product/pro/{pname}")
    public ResponseEntity<Product> getProductByName(@PathVariable("pname") String pname){
        Product product = productService.viewProductByName(pname);
        if (product == null){
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }
    
    @GetMapping("/product/id/{pname}")
    public ResponseEntity<Integer> getProductIdByName(@PathVariable("pname") String pname){
        Product product = productService.viewProductByName(pname);
        if (product == null){
            return new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Integer>(product.getPid(), HttpStatus.OK);
    }
    
    @GetMapping("/product/name/{prid}")
    public ResponseEntity<String> getOneProductNameById(@PathVariable("prid") int prid){
        Product product = productService.viewOneProduct(prid);
        if (product == null){
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(product.getPname(), HttpStatus.OK);
    }
    
    @PostMapping("/product")
    public Product createProduct(@RequestBody Product product){
        return productService.insertProduct(product);
    }
    
    @PutMapping("/product/{prid}")
    public ResponseEntity<Product> updateProduct(@PathVariable("prid") int prid, @RequestBody Product product){
        
        Product currentproduct = productService.viewOneProduct(prid);
        
        if (currentproduct == null){
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
        
        currentproduct.setPid(product.getPid());
        currentproduct.setCatid(product.getCatid());
        currentproduct.setPname(product.getPname());
        currentproduct.setPdesc(product.getPdesc());
        currentproduct.setPimgname(product.getPdesc());
        currentproduct.setManufacturer(product.getManufacturer());
        currentproduct.setSupplier(product.getSupplier());
        currentproduct.setReorderqty(product.getReorderqty());
        currentproduct.setSupplyqty(product.getSupplyqty());
        
        productService.updateProduct(currentproduct);
        
        return new ResponseEntity<Product>(currentproduct, HttpStatus.OK);
    }
    
    @DeleteMapping("/product/{prid}")
    public ResponseEntity<Product> deleteProduct(@PathVariable("prid") int prid){
        Product product = productService.viewOneProduct(prid);
        if (product == null){
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
        productService.deleteProduct(prid);
        return new ResponseEntity<Product>(HttpStatus.NO_CONTENT);
    }
}
