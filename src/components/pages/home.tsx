import { PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

export default function Home(props : PageInterface) {
  const {
    notes, filter, onSearch, onAdd, ...methods
  } = props;

  return (
    <Dashboard filter={filter} onSearch={onSearch} onAdd={onAdd}>
      <NoteList notes={notes} {...methods} />
    </Dashboard>
  );
}
