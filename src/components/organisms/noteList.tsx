import { NoteInterface } from '../../interfaces';
import { Note } from '../molecules';

interface NoteListProps{
  notes : NoteInterface[];
  onArchive(_id: number) : void;
  onStar(_id: number) : void;
  onDelete(_id: number) : void;
}

export default function NoteList(props : NoteListProps) {
  const { notes, ...methods } = props;

  const notesElement = notes.map((note : NoteInterface) => (
    <Note
      {...note}
      key={note.id}
      {...methods}
    />
  ));

  return (
    <div className="h-full">
      <div className="grid grid-cols-4 gap-4 overflow-auto h-fit px-5 py-4 box-border w-full">
        { notesElement }
      </div>
    </div>
  );
}
