import { NoteInterface, PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

export default function Archived(props : PageInterface) {
  const { notes, ...methods } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => note.archived);

  return (
    <Dashboard placeholder="">
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
