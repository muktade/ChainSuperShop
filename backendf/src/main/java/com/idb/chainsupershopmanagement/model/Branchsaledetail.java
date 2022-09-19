package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Branchsaledetail  implements java.io.Serializable {


     private Integer bsaledetid;
     private int bsaleid;
     private int pid;
     private int saleqty;
     private int salerate;
     private int subtotal;

    public Branchsaledetail() {
    }

    public Branchsaledetail(int bsaleid, int pid, int saleqty, int salerate, int subtotal) {
       this.bsaleid = bsaleid;
       this.pid = pid;
       this.saleqty = saleqty;
       this.salerate = salerate;
       this.subtotal = subtotal;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="bsaledetid", unique=true, nullable=false)
    public Integer getBsaledetid() {
        return this.bsaledetid;
    }
    
    public void setBsaledetid(Integer bsaledetid) {
        this.bsaledetid = bsaledetid;
    }

    
    @Column(name="bsaleid", nullable=false)
    public int getBsaleid() {
        return this.bsaleid;
    }
    
    public void setBsaleid(int bsaleid) {
        this.bsaleid = bsaleid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="saleqty", nullable=false)
    public int getSaleqty() {
        return this.saleqty;
    }
    
    public void setSaleqty(int saleqty) {
        this.saleqty = saleqty;
    }

    
    @Column(name="salerate", nullable=false)
    public int getSalerate() {
        return this.salerate;
    }
    
    public void setSalerate(int salerate) {
        this.salerate = salerate;
    }

    @Column(name="subtotal", nullable=false)
    public int getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(int subtotal) {
        this.subtotal = subtotal;
    }



}


