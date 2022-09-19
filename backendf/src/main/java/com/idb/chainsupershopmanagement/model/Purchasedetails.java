package com.idb.chainsupershopmanagement.model;
// Generated Mar 26, 2020 12:59:22 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Purchasedetails  implements java.io.Serializable {


     private Integer purdetid;
     private int purid;
     private int pid;
     private int purqty;
     private Date purdate;
     private int ppricepu;
     private int subtotal;

    public Purchasedetails() {
    }

    public Purchasedetails(int purid, int pid, int purqty, Date purdate, int ppricepu, int subtotal) {
       this.purid = purid;
       this.pid = pid;
       this.purqty = purqty;
       this.purdate = purdate;
       this.ppricepu = ppricepu;
       this.subtotal = subtotal;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="purdetid", unique=true, nullable=false)
    public Integer getPurdetid() {
        return this.purdetid;
    }
    
    public void setPurdetid(Integer purdetid) {
        this.purdetid = purdetid;
    }

    
    @Column(name="purid", nullable=false)
    public int getPurid() {
        return this.purid;
    }
    
    public void setPurid(int purid) {
        this.purid = purid;
    }

    
    @Column(name="pid", nullable=false)
    public int getPid() {
        return this.pid;
    }
    
    public void setPid(int pid) {
        this.pid = pid;
    }

    
    @Column(name="purqty", nullable=false)
    public int getPurqty() {
        return this.purqty;
    }
    
    public void setPurqty(int purqty) {
        this.purqty = purqty;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="purdate", nullable=false, length=10)
    public Date getPurdate() {
        return this.purdate;
    }
    
    public void setPurdate(Date purdate) {
        this.purdate = purdate;
    }

    
    @Column(name="ppricepu", nullable=false)
    public int getPpricepu() {
        return this.ppricepu;
    }
    
    public void setPpricepu(int ppricepu) {
        this.ppricepu = ppricepu;
    }

    @Column(name="subtotal", nullable=false)
    public int getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(int subtotal) {
        this.subtotal = subtotal;
    }

}


