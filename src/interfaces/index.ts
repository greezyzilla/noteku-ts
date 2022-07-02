export interface NoteInterface{
    id: number | string;
    title: string;
    body: string;
    createdAt: string;
    archived: boolean;
    starred?: boolean;
}
