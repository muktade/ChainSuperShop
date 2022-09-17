package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Mainstock  implements java.io.Serializable {


     private Integer mstockid;
     private int pid;
     private int stockqty;

    public Mainstock() {
    }

    public Mainstock(int pid, int stockqty) {
       this.pid = pid;
       this.stockqty = stockqty;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="mstockid", unique=true, nullable=false)
    public Integer getMstockid() {
        return this.mstockid;
    }
    
    public void setMstockid(Integer mstockid) {
        this.mstockid = mstockid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="stockqty", nullable=false)
    public int getStockqty() {
        return this.stockqty;
    }
    
    public void setStockqty(int stockqty) {
        this.stockqty = stockqty;
    }




}


