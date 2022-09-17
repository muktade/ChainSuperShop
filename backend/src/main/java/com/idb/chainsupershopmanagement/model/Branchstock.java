package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Branchstock  implements java.io.Serializable {


     private Integer bstockid;
     private int branchid;
     private int pid;
     private int bstockqty;

    public Branchstock() {
    }

    public Branchstock(int branchid, int pid, int bstockqty) {
       this.branchid = branchid;
       this.pid = pid;
       this.bstockqty = bstockqty;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="bstockid", unique=true, nullable=false)
    public Integer getBstockid() {
        return this.bstockid;
    }
    
    public void setBstockid(Integer bstockid) {
        this.bstockid = bstockid;
    }

    
    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="bstockqty", nullable=false)
    public int getBstockqty() {
        return this.bstockqty;
    }
    
    public void setBstockqty(int bstockqty) {
        this.bstockqty = bstockqty;
    }




}


