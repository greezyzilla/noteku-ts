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

  render() {
    const { notes, filter } = this.state;

    const components = {
      all: <HomePage
        notes={notes}
        filter={filter}
        onArchive={(id:number) => this.onArchiveHandle(id)}
        onStar={(id:number) => this.onStarHandle(id)}
        onDelete={(id:number) => this.onDeleteHandle(id)}
      />,
      active: <ActivePage
        notes={notes}
        onArchive={(id:number) => this.onArchiveHandle(id)}
        onStar={(id:number) => this.onStarHandle(id)}
        onDelete={(id:number) => this.onDeleteHandle(id)}
      />,
      starred: <StarredPage
        notes={notes}
        onArchive={(id:number) => this.onArchiveHandle(id)}
        onStar={(id:number) => this.onStarHandle(id)}
        onDelete={(id:number) => this.onDeleteHandle(id)}
      />,
      archived: <ArchivedPage
        notes={notes}
        onArchive={(id:number) => this.onArchiveHandle(id)}
        onStar={(id:number) => this.onStarHandle(id)}
        onDelete={(id:number) => this.onDeleteHandle(id)}
      />,
    };

    return (
      <Routes>
        <Route path="/" element={components.all} />
        <Route path="/active" element={components.active} />
        <Route path="/starred" element={components.starred} />
        <Route path="/archived" element={components.archived} />
      </Routes>
    );
  }
}

export default App;
