import { NoteInterface } from '../../interfaces';
import { NoteList } from '../organisms';
import Dashboard from '../templates/dashboard';

interface HomeProps{
    notes : NoteInterface[];
    filter : string;
    onArchive(_id: number) : void;
    onStar(_id: number) : void;
}

export default function Home(props : HomeProps) {
  const {
    notes, filter, onArchive, onStar,
  } = props;

  const filteredNotes = notes.filter((note : NoteInterface) => (
    note.title.toLowerCase().includes(filter)
    && note.body.toLowerCase().includes(filter)
  ));

  return (
    <Dashboard placeholder={filter}>
      <NoteList notes={filteredNotes} onArchive={onArchive} onStar={onStar} />
    </Dashboard>
  );
}
