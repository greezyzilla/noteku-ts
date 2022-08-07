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
    <div className="grid grid-cols-4 gap-4 overflow-auto h-full px-5 py-4 box-border w-full">
      { notesElement }
      { notesElement }
    </div>
  );
}
