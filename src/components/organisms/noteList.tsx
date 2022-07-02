import { NoteInterface } from '../../interfaces';
import { Note } from '../molecules';

interface NoteListProps{
    notes : NoteInterface[];
    onArchive(_id: number) : void;
    onStar(_id: number) : void;
}

export default function NoteList(props : NoteListProps) {
  const { notes, onArchive, onStar } = props;

  const notesElement = notes.map((note : NoteInterface) => (
    <Note
      {...note}
      key={note.id}
      onDelete={() => console.log(`delete note-${note.id}`)}
      onArchive={onArchive}
      onStar={onStar}
    />
  ));

  return (
    <div className="grid grid-cols-5 gap-6">
      { notesElement }
    </div>
  );
}
