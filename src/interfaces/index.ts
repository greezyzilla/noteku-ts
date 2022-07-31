export interface NoteInterface{
    id: number | string;
    title: string;
    body: string;
    createdAt: string;
    archived: boolean;
    starred?: boolean;
}

export interface PageInterface{
    notes : NoteInterface[];
    onArchive(_id: number) : void;
    onStar(_id: number) : void;
    onDelete(_id: number) : void;
}
