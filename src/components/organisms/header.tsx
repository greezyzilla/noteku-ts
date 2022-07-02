import { MoonIcon, SearchIcon } from '@heroicons/react/solid';

interface HeaderProps{
  placeholder?: string;
}

export default function Header(props : Partial<HeaderProps>) {
  const { placeholder } = props;
  const displayPlaceholder = placeholder || 'Search note here...';

  return (
    <header className="grid grid-cols-12">
      <div className="col-span-2 py-3 text-2xl font-semibold text-slate-600 px-5 font-roboto flex items-center">Noteku</div>
      <div className="col-span-10 py-3 px-5">
        <div className="flex justify-between">
          <button type="button" className="flex border border-slate-200 h-fit py-2 pl-3 pr-4 rounded-full items-center gap-4 hover:border-slate-300">
            <SearchIcon className="w-4 h-4 text-slate-400" />
            <p className="text-slate-400">{displayPlaceholder}</p>
            <p className="font-semibold text-slate-400 text-sm">Ctrl K</p>
          </button>
          <div className="flex items-center gap-3 text-slate-500">
            <div className="w-9 h-9 flex items-center justify-center bg-slate-100 rounded-md">
              <MoonIcon className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-slate-100 rounded-md">
              <div className="w-4 h-4 rounded-full bg-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
