import { NoteInterface, PageInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

interface HomeProps extends PageInterface{
    filter : string;
}

export default function Home(props : HomeProps) {
  const {
    notes, filter, ...methods
  } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => (
    note.title.toLowerCase().includes(filter)
    && note.body.toLowerCase().includes(filter)
  ));

  return (
    <Dashboard placeholder={filter}>
      <NoteList notes={filteredNotes} {...methods} />
    </Dashboard>
  );
}
