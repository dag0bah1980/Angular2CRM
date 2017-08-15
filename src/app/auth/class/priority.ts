export class Priority {

    constructor (
        public ID: number,
        public CREATED: string,
        public MODIFIED: string,
        public ISACTIVE: boolean,
        public ISDELETED: boolean,
        public PRIORITYCODE: string,
        public PRIORITYNAME: string,
        public DESCRIPTION: string,
        public ORDERVALUE: number
    ) {

    }
}
