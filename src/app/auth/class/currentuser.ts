export class Currentuser {

    constructor (
        public USERNAME : string,
        public LOGINTIME : string,
        public SESSIONKEY: string,
        public CURRENTPAGE: string,
        public BROWSER: string,
        public STATUS: number
    ) { }    
}
