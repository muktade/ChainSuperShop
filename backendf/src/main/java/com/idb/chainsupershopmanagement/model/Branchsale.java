package com.idb.chainsupershopmanagement.model;
// Generated Mar 1, 2020 11:45:56 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Branchsale  implements java.io.Serializable {


     private Integer bsaleid;
     private int branchid;
     private Date saledate;
     private int staffid;
     private String status;

    public Branchsale() {
    }

    public Branchsale(int branchid, Date saledate, int staffid, String status) {
        this.branchid = branchid;
        this.saledate = saledate;
        this.staffid = staffid;
        this.status = status;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="bsaleid", unique=true, nullable=false)
    public Integer getBsaleid() {
        return this.bsaleid;
    }
    
    public void setBsaleid(Integer bsaleid) {
        this.bsaleid = bsaleid;
    }
  
    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="saledate", nullable=false, length=10)
    public Date getSaledate() {
        return this.saledate;
    }
    
    public void setSaledate(Date saledate) {
        this.saledate = saledate;
    }

    
    @Column(name="staffid", nullable=false)
    public int getStaffid() {
        return this.staffid;
    }
    
    public void setStaffid(int staffid) {
        this.staffid = staffid;
    }

    @Column(name="status", nullable=false, length=45)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}


