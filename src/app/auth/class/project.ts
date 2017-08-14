export class Project {
    
    constructor (
        public ID: number,
        public CREATED: string,
        public MODIFIED: string,
        public ISACTIVE: boolean,
        public ISDELETED: boolean,
        public DESCRIPTION: string,
        public PROJECTTYPE: string,
        public TIER: number,
        public PRIORITYID: number,
        public CREATEDBY: number,
        public ASSIGNEDTO: number,
        public RECURRING: boolean,
        public DUEDATE: string,
        public PARENTID: number
    ) {

    }
}
