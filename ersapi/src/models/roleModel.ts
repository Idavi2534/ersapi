export class Role{



    roleId: number// primary key
    role: string // not null, unique
  

constructor(id=0, role=''){
    this.roleId=id;
    this.role=role;
}



}