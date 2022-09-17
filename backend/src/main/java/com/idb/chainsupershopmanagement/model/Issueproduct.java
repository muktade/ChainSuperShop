package com.idb.chainsupershopmanagement.model;
// Generated Feb 29, 2020 6:17:36 PM by Hibernate Tools 4.3.1


import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
public class Issueproduct  implements java.io.Serializable {


     private Integer issueid;
     private Date issuedate;
     private String emailid;
     

    public Issueproduct() {
    }

    public Issueproduct(Date issuedate, String emailid) {
        this.issuedate = issuedate;
        this.emailid = emailid;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="issueid", unique=true, nullable=false)
    public Integer getIssueid() {
        return this.issueid;
    }
    
    public void setIssueid(Integer issueid) {
        this.issueid = issueid;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="issuedate", nullable=false, length=10)
    public Date getIssuedate() {
        return this.issuedate;
    }
    
    public void setIssuedate(Date issuedate) {
        this.issuedate = issuedate;
    }
    
    @Column(name="emailid", nullable=false, length=45)
    public String getEmailid() {
        return this.emailid;
    }
    
    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

}


