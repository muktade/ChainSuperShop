package com.idb.chainsupershopmanagement.repository;

import com.idb.chainsupershopmanagement.model.Branchsale;
import com.idb.chainsupershopmanagement.model.Issuedetails;
import com.idb.chainsupershopmanagement.service.JoinTableService;
import org.hibernate.Query;
import org.hibernate.Session;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public class JoinTableRepository implements JoinTableService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Object[]> getAllProductWithCatName() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select p, pc from Product p, Pcategory pc where p.catid=pc.catid").list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getAllProductAndPurchaseAndPurchaseDetail() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select pr, p, pd from Purchase pr, Product p, Purchasedetails pd where pr.purid=pd.purid and p.pid=pd.pid").list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getMainStockDetails() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select ms, p, pc from Mainstock ms, Product p, Pcategory pc where ms.pid=p.pid and p.catid=pc.catid").list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getIssueproductDetailsWithProductAndBranch() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select isd, isp, p, bi from Issuedetails isd, Issueproduct isp, Product p, Branchinfo bi where isd.issueid=isp.issueid and isd.pid=p.pid and isd.branchid = bi.branchid").list();

        return pcatlist;
    }

    @Override
    public List<Issuedetails> getIssueproductDetailsWithProductBranch(int branchid) {
        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select isd from Issuedetails isd where isd.branchid=:bid and isd.status='pending'");
        query.setParameter("bid", branchid);
        List<Issuedetails> pcatlist = query.list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getReceivedproductlistwithissuedetails(int branchid) {

        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select rp, isp, isd, bi from Receiveproduct rp, Issueproduct isp, Issuedetails isd, Branchinfo bi where rp.issueid=isp.issueid and rp.branchid = bi.branchid and rp.branchid = :bid and rp.issuedetid = isd.issuedetid");
        query.setParameter("bid", branchid);
        List<Object[]> pcatlist = query.list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getPendingReceivedproductlistwithissuedetails(int branchid) {
        
        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select rp, ispd from Receiveproduct rp, Issuedetails ispd where rp.issuedetid=ispd.issuedetid and rp.status ='not stocked' and ispd.status='received' and rp.branchid = :bid");
        query.setParameter("bid", branchid);
        List<Object[]> pcatlist = query.list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getReceiveDetailswithissuedetails(int branchid) {

        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select rp, rpd, p, bi, ispd from Receiveproduct rp, Receivedetail rpd, Product p, Branchinfo bi, Issuedetails ispd where rpd.pid=p.pid and rp.recid=rpd.recid and rp.branchid = bi.branchid and rp.issuedetid=ispd.issuedetid and rp.branchid = :bid");
        query.setParameter("bid", branchid);
        List<Object[]> pcatlist = query.list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getBranchStockDetails() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select bs, bi, p, pc from Branchstock bs, Branchinfo bi, Product p, Pcategory pc where bs.branchid = bi.branchid and bs.pid=p.pid and p.catid=pc.catid").list();
        return pcatlist;
    }

    @Override
    public List<Object[]> getBranchSaleDetailsEverything() {

        Session session = entityManager.unwrap(Session.class);
        List<Object[]> pcatlist = session.createQuery("select bs, bi, sd from Branchsale bs, Branchinfo bi, Staffdetail sd where bs.branchid=bi.branchid and bs.staffid=sd.staffid").list();

        return pcatlist;
    }

    @Override
    public List<Object[]> getBranchStockDetailsViaBranchid(int branchid) {
        
        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select bs, bi, p, pc from Branchstock bs, Branchinfo bi, Product p, Pcategory pc where bs.branchid = bi.branchid  and bs.pid=p.pid and p.catid=pc.catid and bs.branchid = :bid");
        query.setParameter("bid", branchid);
        List<Object[]> pcatlist = query.list();

        return pcatlist;
    }

    @Override
    public List<Branchsale> getBranchSaleIDViaBranchid(int branchid) {
        
        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select bs from Branchsale bs where bs.branchid = :bid");
        query.setParameter("bid", branchid);
        List<Branchsale> pcatlist = query.list();

        return pcatlist;
    }
}
