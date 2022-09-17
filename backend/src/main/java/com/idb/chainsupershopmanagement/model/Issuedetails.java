package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Issuedetails  implements java.io.Serializable {


     private Integer issuedetid;
     private int issueid;
     private int pid;
     private int issueqty;
     private double spricerate;
     private String status;
     private int branchid;

    public Issuedetails() {
    }

    public Issuedetails(int issueid, int pid, int issueqty, double spricerate, String status, int branchid) {
        this.issueid = issueid;
        this.pid = pid;
        this.issueqty = issueqty;
        this.spricerate = spricerate;
        this.status = status;
        this.branchid = branchid;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="issuedetid", unique=true, nullable=false)
    public Integer getIssuedetid() {
        return this.issuedetid;
    }
    
    public void setIssuedetid(Integer issuedetid) {
        this.issuedetid = issuedetid;
    }

    
    @Column(name="issueid", nullable=false)
    public int getIssueid() {
        return this.issueid;
    }
    
    public void setIssueid(int issueid) {
        this.issueid = issueid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="issueqty", nullable=false)
    public int getIssueqty() {
        return this.issueqty;
    }
    
    public void setIssueqty(int issueqty) {
        this.issueqty = issueqty;
    }

    
    @Column(name="spricerate", nullable=false, precision=22, scale=0)
    public double getSpricerate() {
        return this.spricerate;
    }
    
    public void setSpricerate(double spricerate) {
        this.spricerate = spricerate;
    }

    @Column(name="status", nullable=false, length=45)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return branchid;
    }

    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }


}


