package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Receivedetail  implements java.io.Serializable {


     private Integer recdetid;
     private int recid;
     private int pid;
     private int recqty;
     private double spricerate;

    public Receivedetail() {
    }

    public Receivedetail(int recid, int pid, int recqty, double spricerate) {
       this.recid = recid;
       this.pid = pid;
       this.recqty = recqty;
       this.spricerate = spricerate;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="recdetid", unique=true, nullable=false)
    public Integer getRecdetid() {
        return this.recdetid;
    }
    
    public void setRecdetid(Integer recdetid) {
        this.recdetid = recdetid;
    }

    
    @Column(name="recid", nullable=false)
    public int getRecid() {
        return this.recid;
    }
    
    public void setRecid(int recid) {
        this.recid = recid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="recqty", nullable=false)
    public int getRecqty() {
        return this.recqty;
    }
    
    public void setRecqty(int recqty) {
        this.recqty = recqty;
    }

    
    @Column(name="spricerate", nullable=false, precision=22, scale=0)
    public double getSpricerate() {
        return this.spricerate;
    }
    
    public void setSpricerate(double spricerate) {
        this.spricerate = spricerate;
    }




}


