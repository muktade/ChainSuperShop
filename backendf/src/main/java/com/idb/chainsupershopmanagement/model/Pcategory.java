package com.idb.chainsupershopmanagement.model;
// Generated Mar 1, 2020 11:45:56 PM by Hibernate Tools 4.3.1


import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Pcategory  implements java.io.Serializable {


    @Autowired
     private Integer catid;

    @Autowired
     private String catname;

    @Autowired
     private String catdesc;


    public Pcategory() {
    }

    public Pcategory(String catname, String catdesc) {
       this.catname = catname;
       this.catdesc = catdesc;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="catid", unique=true, nullable=false)
    public Integer getCatid() {
        return this.catid;
    }
    
    public void setCatid(Integer catid) {
        this.catid = catid;
    }

    
    @Column(name="catname", nullable=false, length=45)
    public String getCatname() {
        return this.catname;
    }
    
    public void setCatname(String catname) {
        this.catname = catname;
    }

    
    @Column(name="catdesc", nullable=false, length=45)
    public String getCatdesc() {
        return this.catdesc;
    }
    
    public void setCatdesc(String catdesc) {
        this.catdesc = catdesc;
    }




}


