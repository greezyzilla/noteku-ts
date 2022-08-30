import {
  ArchiveIcon, CalendarIcon, StarIcon, ViewGridIcon,
} from '@heroicons/react/solid';
import { NoteInterface } from '../../../interfaces';
import { Button } from '../../atoms';
import { AddNoteForm } from '../../molecules';
import SidebarItem from './sidebarItem';

interface SidebarProps{
  onAdd(_note : NoteInterface) : void;
}

export default function Sidebar(props : SidebarProps) {
  const { onAdd } = props;

  return (
    <div className="col-span-3 my-3 ml-3 hidden h-full flex-col gap-2 backdrop-blur-lg md:flex lg:col-span-2">
      <div className="flex w-full justify-center pb-1">
        <AddNoteForm onAdd={onAdd}>
          {({ onClick }) => (
            <Button onClick={onClick} className="flex-1 bg-blue-500 p-4 text-white shadow-sm hover:shadow-lg">
              Add New Note
            </Button>
          )}
        </AddNoteForm>
      </div>
      <div className="flex flex-1 flex-col gap-3 bg-white/80 p-3 shadow-sm">
        <div>
          <p className="ml-1 text-xs font-semibold text-slate-400">MENU</p>
          <SidebarItem Icon={ViewGridIcon} label="All Notes" path="/" />
        </div>
        <div>
          <p className="ml-1 text-xs font-semibold text-slate-400">TAGS</p>
          <div className="flex flex-col">
            <SidebarItem Icon={CalendarIcon} label="Active" path="/active" />
            <SidebarItem Icon={StarIcon} label="Starred" path="/starred" />
            <SidebarItem Icon={ArchiveIcon} label="Archived" path="/archived" />
          </div>
        </div>
      </div>
    </div>
  );
}
