package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Product  implements java.io.Serializable {


     private Integer pid;
     private int catid;
     private String pname;
     private String pdesc;
     private String pimgname;
     private String manufacturer;
     private String supplier;
     private int reorderqty;
     private int supplyqty;

    public Product() {
    }

    public Product(int catid, String pname, String pdesc, String pimgname, String manufacturer, String supplier, int reorderqty, int supplyqty) {
       this.catid = catid;
       this.pname = pname;
       this.pdesc = pdesc;
       this.pimgname = pimgname;
       this.manufacturer = manufacturer;
       this.supplier = supplier;
       this.reorderqty = reorderqty;
       this.supplyqty = supplyqty;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="pid", unique=true, nullable=false)
    public Integer getPid() {
        return this.pid;
    }
    
    public void setPid(Integer pid) {
        this.pid = pid;
    }

    
    @Column(name="catid", nullable=false)
    public int getCatid() {
        return this.catid;
    }
    
    public void setCatid(int catid) {
        this.catid = catid;
    }

    
    @Column(name="pname", nullable=false, length=45)
    public String getPname() {
        return this.pname;
    }
    
    public void setPname(String pname) {
        this.pname = pname;
    }

    
    @Column(name="pdesc", nullable=false, length=45)
    public String getPdesc() {
        return this.pdesc;
    }
    
    public void setPdesc(String pdesc) {
        this.pdesc = pdesc;
    }

    
    @Column(name="pimgname", nullable=false, length=45)
    public String getPimgname() {
        return this.pimgname;
    }
    
    public void setPimgname(String pimgname) {
        this.pimgname = pimgname;
    }

    
    @Column(name="manufacturer", nullable=false, length=45)
    public String getManufacturer() {
        return this.manufacturer;
    }
    
    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    
    @Column(name="supplier", nullable=false, length=45)
    public String getSupplier() {
        return this.supplier;
    }
    
    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    
    @Column(name="reorderqty", nullable=false)
    public int getReorderqty() {
        return this.reorderqty;
    }
    
    public void setReorderqty(int reorderqty) {
        this.reorderqty = reorderqty;
    }

    
    @Column(name="supplyqty", nullable=false)
    public int getSupplyqty() {
        return this.supplyqty;
    }
    
    public void setSupplyqty(int supplyqty) {
        this.supplyqty = supplyqty;
    }

}


