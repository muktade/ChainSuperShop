/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Receiveproduct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReceiveproductService {
    
    public List<Receiveproduct> viewAllReceiveproduct();
    
    public Receiveproduct viewOneReceiveproduct(int recid);
    
    public Receiveproduct insertReceiveproduct(Receiveproduct receiveproduct);
    
    public void updateReceiveproduct(Receiveproduct receiveproduct);
    
    public void deleteReceiveproduct(int recid);
}
