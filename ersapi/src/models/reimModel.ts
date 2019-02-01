export class Reimbursement{



    reimbursementId: number // primary key
	author: number  // foreign key -> User, not null
	amount: number  // not null
  dateSubmitted: number // not null
  dateResolved: number // not null
  description: string // not null
  resolver: number // foreign key -> User
  status: number // foreign ey -> ReimbursementStatus, not null
  type: number // foreign key -> ReimbursementType



  constructor(rId=0, rAuthor=0, rAmount=0,rDateSub=0, rDateRes=0, rDesc='', rResolver=0, rStatus=0, rType=0){
      this.reimbursementId=rId;
      this.author=rAuthor;
      this.amount=rAmount
      this.dateSubmitted=rDateSub
      this.dateResolved=rDateRes
      this.description=rDesc
      this.resolver=rResolver
      this.status=rStatus
      this.type=rType;
  }


}