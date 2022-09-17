/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.idb.chainsupershopmanagement.service;

import com.idb.chainsupershopmanagement.model.Issuedetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IssuedetailsService {
    
    public List<Issuedetails> viewAllIssuedetails();
    
    public Issuedetails viewOneIssuedetails(int issuedetid);
    
    public Issuedetails insertIssuedetails(Issuedetails issuedetails);
    
    public void updateIssuedetails(Issuedetails issuedetails);
    
    public void deleteIssuedetails(int issuedetid);
}
