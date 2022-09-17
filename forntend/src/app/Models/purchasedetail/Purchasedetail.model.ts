export class Purchasedetail{
    
    purdetid: number;
    purid: number;
    pid: number;
    purqty: number;
    purdate: Date;
    ppricepu: number;
    subtotal: number;

    constructor(public spurid, public spurdate, public spid, public spurqty,  public sppricepu, public ssubtotal){
        this.spurid = null;
        this.spurdate = null;
        this.spid = null;
        this.sppricepu = null;
        this.spurqty = null;
        this.ssubtotal = null;
    }
}