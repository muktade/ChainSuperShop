export class Branchsaledetail {

    bsaledetid: number;
    bsaleid: number;
    pid: number;
    saleqty: number;
    salerate: number;
    subtotal: number;

    constructor(public sbsaleid,public spid,public ssaleqty,public ssalerate,public ssubtotal){
        this.sbsaleid = null;
        this.spid = null;
        this.ssaleqty = null;
        this.ssalerate = null;
        this.ssubtotal = null;
    }
}