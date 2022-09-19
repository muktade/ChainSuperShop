package com.idb.chainsupershopmanagement.model;
// Generated Mar 1, 2020 11:45:56 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Branchinfo  implements java.io.Serializable {


     private Integer branchid;
     private String blocation;
     private String bcontact;
     private String bemail;
     private String bdesc;

    public Branchinfo() {
    }

    public Branchinfo(String blocation, String bcontact, String bemail, String bdesc) {
       this.blocation = blocation;
       this.bcontact = bcontact;
       this.bemail = bemail;
       this.bdesc = bdesc;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="branchid", unique=true, nullable=false)
    public Integer getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(Integer branchid) {
        this.branchid = branchid;
    }

    
    @Column(name="blocation", nullable=false, length=45)
    public String getBlocation() {
        return this.blocation;
    }
    
    public void setBlocation(String blocation) {
        this.blocation = blocation;
    }

    
    @Column(name="bcontact", nullable=false, length=45)
    public String getBcontact() {
        return this.bcontact;
    }
    
    public void setBcontact(String bcontact) {
        this.bcontact = bcontact;
    }

    
    @Column(name="bemail", nullable=false, length=45)
    public String getBemail() {
        return this.bemail;
    }
    
    public void setBemail(String bemail) {
        this.bemail = bemail;
    }

    
    @Column(name="bdesc", nullable=false, length=45)
    public String getBdesc() {
        return this.bdesc;
    }
    
    public void setBdesc(String bdesc) {
        this.bdesc = bdesc;
    }




}


