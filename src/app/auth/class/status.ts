export class Status {

    constructor (
        public ID : number,
        public CREATED : string,
        public MODIFIED : string,
        public ISACTIVE : boolean,
        public ISDELETED : boolean,
        public STATUSCODE : string,
        public STATUSNAME : string,
        public DESCRIPTION : string,
        public ORDERVALUE : number      
    ) { }

}
