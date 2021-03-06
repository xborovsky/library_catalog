export class Book {
    private id : number;
    private title : string;
    private pageCount : number;
    private ISBN : string;
    private checkedOut : boolean;

    constructor(id: number, title : string, pageCount : number, ISBN : string, checkedOut? : boolean) {
        this.id = id;
        this.title = title;
        this.pageCount = pageCount;
        this.ISBN = ISBN;
        this.checkedOut = checkedOut || false;
    }

    public getId() : number {
        return this.id;
    }

    public getTitle() : string {
        return this.title;
    }

    public setTitle(title : string) : void {
        this.title = title;
    }

    public getPageCount() : number {
        return this.pageCount;
    }

    public setPageCount(pageCount : number) : void {
        this.pageCount = pageCount;
    }

    public getISBN() : string {
        return this.ISBN;
    }

    public setISBN(ISBN : string) : void {
        this.ISBN = ISBN;
    }

    public isCheckedOut() : boolean {
        return this.checkedOut;
    }

    public setCheckedOut(checkedOut : boolean) : void {
        this.checkedOut = checkedOut;
    }
}
