import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ActivePage, ArchivedPage, HomePage, StarredPage,
} from './components/pages';
import { NoteInterface } from './interfaces';
import { getInitialData } from './utils';

interface RootState{
  notes: NoteInterface[];
  filter : string;
}

class App extends Component<any, RootState> {
  constructor(props : any) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filter: '',
    };
  }

  onArchiveHandle(id : number) {
    const { notes } = this.state;
    const newNotes = [...notes];
    const noteId = newNotes.findIndex((Note : NoteInterface) => +Note.id === +id);
    newNotes[noteId].archived = !newNotes[noteId].archived;
    this.setState({ notes: newNotes });
  }

  onStarHandle(id : number) {
    const { notes } = this.state;
    const newNotes = [...notes];
    const noteId = newNotes.findIndex((Note : NoteInterface) => +Note.id === +id);
    newNotes[noteId].starred = !newNotes[noteId].starred;
    this.setState({ notes: newNotes });
  }

  onDeleteHandle(id: number) {
    const { notes } = this.state;
    const newNotes = notes.filter((note : NoteInterface) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  onSearchHandle(query: string) {
    this.setState({ filter: query });
  }

  onAddHandle(note : NoteInterface) {
    this.setState((prevState : RootState) => ({
      ...prevState,
      notes: [
        note,
        ...prevState.notes,
      ],
    }));
  }

  onEditHandle(id : number | string, newNote : NoteInterface) {
    const { notes } = this.state;
    const noteId = notes.findIndex((n : NoteInterface) => n.id === id);
    notes[+noteId] = newNote;
    this.setState((prevState : RootState) => ({
      ...prevState,
      notes,
    }));
  }

  render() {
    const { notes, filter } = this.state;
    const filteredNotes = notes
      .filter((note : NoteInterface) => (
        note.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      || note.body.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ));

    const pageProps = {
      notes: filteredNotes,
      filter,
      onArchive: (id:number) => this.onArchiveHandle(id),
      onStar: (id:number) => this.onStarHandle(id),
      onDelete: (id:number) => this.onDeleteHandle(id),
      onSearch: (query: string) => this.onSearchHandle(query),
      onAdd: (note : NoteInterface) => this.onAddHandle(note),
      onEdit: (id : number | string, note : NoteInterface) => this.onEditHandle(id, note),
    };

    return (
      <Routes>
        <Route path="/" element={<HomePage {...pageProps} />} />
        <Route path="/active" element={<ActivePage {...pageProps} />} />
        <Route path="/starred" element={<StarredPage {...pageProps} />} />
        <Route path="/archived" element={<ArchivedPage {...pageProps} />} />
      </Routes>
    );
  }
}

export default App;
