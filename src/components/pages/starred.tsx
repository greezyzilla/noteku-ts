import { NoteInterface, PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

export default function Starred(props : PageInterface) {
  const {
    notes, filter, onSearch, ...methods
  } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => note.starred);

  return (
    <Dashboard filter={filter} onSearch={onSearch}>
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
