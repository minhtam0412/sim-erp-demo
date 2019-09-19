export class PagingParam {
    PageSize: number;
    PageIndex: number;
    constructor(pageSize:number, pageIndex:number){
        this.PageSize = pageSize;
        this.PageIndex = pageIndex;
    }

}