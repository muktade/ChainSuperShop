package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Allincexp  implements java.io.Serializable {


     private Integer incexpid;
     private int bsaleid;
     private int bexpid;
     private double incamount;
     private double expamount;
     private Date odate;

    public Allincexp() {
    }

    public Allincexp(int bsaleid, int bexpid, double incamount, double expamount, Date odate) {
       this.bsaleid = bsaleid;
       this.bexpid = bexpid;
       this.incamount = incamount;
       this.expamount = expamount;
       this.odate = odate;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="incexpid", unique=true, nullable=false)
    public Integer getIncexpid() {
        return this.incexpid;
    }
    
    public void setIncexpid(Integer incexpid) {
        this.incexpid = incexpid;
    }

    
    @Column(name="bsaleid", nullable=false)
    public int getBsaleid() {
        return this.bsaleid;
    }
    
    public void setBsaleid(int bsaleid) {
        this.bsaleid = bsaleid;
    }

    
    @Column(name="bexpid", nullable=false)
    public int getBexpid() {
        return this.bexpid;
    }
    
    public void setBexpid(int bexpid) {
        this.bexpid = bexpid;
    }

    
    @Column(name="incamount", nullable=false, precision=22, scale=0)
    public double getIncamount() {
        return this.incamount;
    }
    
    public void setIncamount(double incamount) {
        this.incamount = incamount;
    }

    
    @Column(name="expamount", nullable=false, precision=22, scale=0)
    public double getExpamount() {
        return this.expamount;
    }
    
    public void setExpamount(double expamount) {
        this.expamount = expamount;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="odate", nullable=false, length=10)
    public Date getOdate() {
        return this.odate;
    }
    
    public void setOdate(Date odate) {
        this.odate = odate;
    }




}


