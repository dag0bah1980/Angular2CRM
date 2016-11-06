export class User {
    
    constructor (
        public ID : number,
        public CREATED : string,
        public MODIFIED : string,
        public ISACTIVE : boolean,
        public ISDELETED : boolean,
        public USERNAME : string,
        public FNAME : string,
        public LNAME : string, 
        public PWORD : string       
    ) { }
}
