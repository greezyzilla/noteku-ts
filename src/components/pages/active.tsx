import { NoteInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

interface ActiveProps{
    notes : NoteInterface[];
    onArchive(_id: number) : void;
    onStar(_id: number) : void;
    onDelete(_id: number) : void;
}

export default function Active(props : ActiveProps) {
  const { notes, ...methods } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => !note.archived);

  return (
    <Dashboard placeholder="">
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
