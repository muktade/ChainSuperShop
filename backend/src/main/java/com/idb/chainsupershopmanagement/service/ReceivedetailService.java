/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Receivedetail;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReceivedetailService {
    
    public List<Receivedetail> viewAllReceivedetail();
    
    public Receivedetail viewOneReceivedetail(int recdetid);
    
    public Receivedetail insertReceivedetail(Receivedetail receivedetail);
    
    public void updateReceivedetail(Receivedetail receivedetail);
    
    public void deleteReceivedetail(int recdetid);
    
}
