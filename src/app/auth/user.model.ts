export class User{

    constructor( public firstName:string, public lastName:string){ }

    fullname(){
        return `${this.firstName} ${this.lastName}`
    }
}