export class Tier {

    constructor (
        public ID : number,
        public CREATED : string,
        public MODIFIED : string,
        public ISACTIVE : boolean,
        public ISDELETED : boolean,
        public TIERCODE : string,
        public TIERNAME : string,
        public DESCRIPTION : string,
        public ORDERVALUE: number       
    ) { }
}
