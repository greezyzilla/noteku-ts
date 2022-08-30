import { PlusIcon } from '@heroicons/react/solid';
import { ReactElement } from 'react';
import { NoteInterface } from '../../interfaces';
import { AddNoteForm } from '../molecules';
import {
  Footer, Header, NavigationPills, Sidebar,
} from '../organisms';

interface DashboardProps{
    children : ReactElement;
    filter : string;
    onSearch(_query:string) : void;
    onAdd(_note:NoteInterface) : void;
}

export default function Dashboard(props : DashboardProps) {
  const {
    children, filter, onSearch, onAdd,
  } = props;
  return (
    <div className="relative h-screen max-h-screen bg-gradient-to-b from-blue-100 to-orange-100">
      <div className="md:hidden">
        <AddNoteForm onAdd={onAdd}>
          {({ onClick } : any) => (
            <button
              type="button"
              className="group absolute bottom-5 right-5 z-10 rounded-full bg-blue-600 p-4 text-white shadow-lg shadow-slate-400"
              onClick={onClick}
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          )}
        </AddNoteForm>
      </div>
      <div className="container mx-auto box-border flex h-full flex-col">
        <Header filter={filter} onSearch={onSearch} />
        <main className="flex h-full overflow-hidden">
          <div className="flex flex-1 flex-col md:grid md:grid-cols-12">
            <NavigationPills />
            <Sidebar onAdd={onAdd} />
            <div className="flex h-full overflow-y-auto md:col-span-9 lg:col-span-10">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
