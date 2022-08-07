import { NoteInterface, PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

export default function Starred(props : PageInterface) {
  const {
    notes, filter, onSearch, onAdd, ...methods
  } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => note.starred);

  return (
    <Dashboard filter={filter} onSearch={onSearch} onAdd={onAdd}>
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
