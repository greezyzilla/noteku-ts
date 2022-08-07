import {
  ArchiveIcon, CalendarIcon, StarIcon, ViewGridIcon,
} from '@heroicons/react/solid';
import { NoteInterface } from '../../../interfaces';
import AddNoteForm from '../addNoteForm';
import SidebarItem from './sidebarItem';

interface SidebarProps{
  onAdd(_note :NoteInterface) : void;
}

export default function Sidebar(props : SidebarProps) {
  const { onAdd } = props;

  const icons = {
    calendar: <CalendarIcon className="w-4 h-4" />,
    star: <StarIcon className="w-4 h-4" />,
    archived: <ArchiveIcon className="w-4 h-4" />,
    grid: <ViewGridIcon className="w-4 h-4" />,
  };

  return (
    <div className="lg:col-span-2 col-span-3 hidden md:flex flex-col gap-3 py-2 h-full">
      <div className="flex justify-center px-4 w-full pt-5">
        <AddNoteForm onAdd={onAdd} />
      </div>
      <SidebarItem icon={icons.grid} label="All Notes" path="/" />
      <div>
        <p className="mx-5 font-semibold text-slate-400 text-sm">TAGS</p>
        <div className="flex flex-col">
          <SidebarItem icon={icons.calendar} label="Active" path="/active" />
          <SidebarItem icon={icons.star} label="Starred" path="/starred" />
          <SidebarItem icon={icons.archived} label="Archived" path="/archived" />
        </div>
      </div>
    </div>
  );
}
