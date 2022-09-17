package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Receiveproduct  implements java.io.Serializable {


     private Integer recid;
     private int branchid;
     private Date recdate;
     private int issueid;
     private int issuedetid;
     private String status;

    public Receiveproduct() {
    }

    public Receiveproduct(int branchid, Date recdate, int issueid, int issuedetid, String status) {
        this.branchid = branchid;
        this.recdate = recdate;
        this.issueid = issueid;
        this.issuedetid = issuedetid;
        this.status = status;
    }

    
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="recid", unique=true, nullable=false)
    public Integer getRecid() {
        return this.recid;
    }
    
    public void setRecid(Integer recid) {
        this.recid = recid;
    }

    
    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="recdate", nullable=false, length=10)
    public Date getRecdate() {
        return this.recdate;
    }
    
    public void setRecdate(Date recdate) {
        this.recdate = recdate;
    }

    
    @Column(name="issueid", nullable=false)
    public int getIssueid() {
        return this.issueid;
    }
    
    public void setIssueid(int issueid) {
        this.issueid = issueid;
    }

    @Column(name="status", nullable=false, length=45)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name="issuedetid", nullable=false)
    public int getIssuedetid() {
        return issuedetid;
    }

    public void setIssuedetid(int issuedetid) {
        this.issuedetid = issuedetid;
    }

    
    

}


