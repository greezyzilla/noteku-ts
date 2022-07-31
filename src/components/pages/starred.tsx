import { NoteInterface, PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

export default function Starred(props : PageInterface) {
  const { notes, ...methods } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => note.starred);

  return (
    <Dashboard placeholder="">
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
