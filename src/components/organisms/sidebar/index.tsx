import {
  ArchiveIcon, CalendarIcon, StarIcon, ViewGridIcon,
} from '@heroicons/react/solid';
import SidebarItem from './sidebarItem';

export default function Sidebar() {
  const icons = {
    calendar: <CalendarIcon className="w-4 h-4" />,
    star: <StarIcon className="w-4 h-4" />,
    archived: <ArchiveIcon className="w-4 h-4" />,
    grid: <ViewGridIcon className="w-4 h-4" />,
  };

  return (
    <div className="lg:col-span-2 col-span-3 hidden md:flex flex-col gap-3 py-2 h-full">
      <SidebarItem icon={icons.grid} label="All Notes" path="/" />
      <div>
        <p className="mx-5 font-semibold text-slate-400 text-sm">TAGS</p>
        <div className="flex flex-col">
          <SidebarItem icon={icons.calendar} label="Active" path="/active" />
          <SidebarItem icon={icons.star} label="Starred" path="/starred" />
          <SidebarItem icon={icons.archived} label="Active" path="/archived" />
        </div>
      </div>
    </div>
  );
}
