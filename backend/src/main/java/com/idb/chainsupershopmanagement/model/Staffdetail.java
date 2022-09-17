package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Staffdetail  implements java.io.Serializable {


     private Integer staffid;
     private int branchid;
     private String semail;
     private String name;
     private Date dob;
     private String gender;
     private String address;
     private Date jdate;
     private boolean status;
     private String designation;
     private String staffimg;

    public Staffdetail() {
    }

    public Staffdetail(int branchid, String semail, String name, Date dob, String gender, String address, Date jdate, boolean status, String designation, String staffimg) {
        this.branchid = branchid;
        this.semail = semail;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.jdate = jdate;
        this.status = status;
        this.designation = designation;
        this.staffimg = staffimg;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="staffid", unique=true, nullable=false)
    public Integer getStaffid() {
        return this.staffid;
    }
    
    public void setStaffid(Integer staffid) {
        this.staffid = staffid;
    }

    
    @Column(name="branchid", nullable=false)
    public int getBranchid() {
        return this.branchid;
    }
    
    public void setBranchid(int branchid) {
        this.branchid = branchid;
    }

    
    @Column(name="semail", nullable=false, length=45)
    public String getSemail() {
        return this.semail;
    }
    
    public void setSemail(String semail) {
        this.semail = semail;
    }

    
    @Column(name="name", nullable=false, length=45)
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="dob", nullable=false, length=10)
    public Date getDob() {
        return this.dob;
    }
    
    public void setDob(Date dob) {
        this.dob = dob;
    }

    
    @Column(name="gender", nullable=false, length=45)
    public String getGender() {
        return this.gender;
    }
    
    public void setGender(String gender) {
        this.gender = gender;
    }

    
    @Column(name="address", nullable=false, length=45)
    public String getAddress() {
        return this.address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="jdate", nullable=false, length=10)
    public Date getJdate() {
        return this.jdate;
    }
    
    public void setJdate(Date jdate) {
        this.jdate = jdate;
    }

    
    @Column(name="status", nullable=false)
    public boolean isStatus() {
        return this.status;
    }
    
    public void setStatus(boolean status) {
        this.status = status;
    }

    @Column(name="designation", nullable=false, length=45)
    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @Column(name="staffimg", nullable=false, length=45)
    public String getStaffimg() {
        return staffimg;
    }

    public void setStaffimg(String staffimg) {
        this.staffimg = staffimg;
    }

}


