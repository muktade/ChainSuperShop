/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Allincexp;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface AllincexpService {
    
    public List<Allincexp> viewAllincexp();
    
    public Allincexp viewOneAllincexp(int incexpid);
    
    public List<Allincexp> viewAllinc(int bsaleid);
    
    public List<Allincexp> viewAllexp(int bexpid);
    
    public List<Allincexp> Allincexp(Date odate);
    
    public Allincexp insertAllincexp(Allincexp allincexp);
    
    public void updateAllincexp(Allincexp allincexp);
    
    public void deleteAllincexp(int incexpid);
}
