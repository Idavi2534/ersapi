export class reimbursementStatus{



    statusId: number // primary key
    status: string // not null, unique



    constructor(id=0, status=''){

        this.statusId=id;
        this.status=status;
    }
    
}