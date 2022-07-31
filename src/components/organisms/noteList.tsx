import { NoteInterface, PageInterface } from '../../interfaces';
import { Note } from '../molecules';

interface NoteListProps extends PageInterface{

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
    <div className="grid grid-cols-5 gap-6">
      { notesElement }
    </div>
  );
}
