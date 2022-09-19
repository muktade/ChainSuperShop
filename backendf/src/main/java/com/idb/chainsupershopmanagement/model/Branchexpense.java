package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Branchexpense  implements java.io.Serializable {


     private Integer bexpid;
     private int branchid;
     private String expdesc;
     private double expamount;
     private Date expdate;
     private String status;

    public Branchexpense() {
    }

    public Branchexpense(int branchid, String expdesc, double expamount, Date expdate, String status) {
        this.branchid = branchid;
        this.expdesc = expdesc;
        this.expamount = expamount;
        this.expdate = expdate;
        this.status = status;
    }

   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="bexpid", unique=true, nullable=false)
    public Integer getBexpid() {
        return this.bexpid;
    }
    
    public void setBexpid(Integer bexpid) {
        this.bexpid = bexpid;
    }

    
    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    
    @Column(name="expdesc", nullable=false, length=45)
    public String getExpdesc() {
        return this.expdesc;
    }
    
    public void setExpdesc(String expdesc) {
        this.expdesc = expdesc;
    }

    
    @Column(name="expamount", nullable=false, precision=22, scale=0)
    public double getExpamount() {
        return this.expamount;
    }
    
    public void setExpamount(double expamount) {
        this.expamount = expamount;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="expdate", nullable=false, length=10)
    public Date getExpdate() {
        return expdate;
    }

    public void setExpdate(Date expdate) {
        this.expdate = expdate;
    }

    @Column(name="status", nullable=false, length=45)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    


}


