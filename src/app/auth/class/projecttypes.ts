export class Projecttypes {

    constructor (
        public ID: number,
        public CREATED: string,
        public MODIFIED: string,
        public ISACTIVE: boolean,
        public ISDELETED: boolean,
        public PROJTYPECODE: string,
        public PROJTYPENAME: string,
        public PARENTPROJTYPEID: number,
        public DESCRIPTION: string,
        public ORDERVALUE: number
    ) {

    }
    
}
