import { MoonIcon, SearchIcon } from '@heroicons/react/solid';

interface HeaderProps{
  placeholder?: string;
}

export default function Header(props : Partial<HeaderProps>) {
  const { placeholder } = props;
  const displayPlaceholder = placeholder || 'Search note here...';

  return (
    <header className="flex w-full h-fit">
      <div className="grid grid-cols-12 w-full flex-1">
        <div className="col-span-2 py-3 text-2xl font-semibold text-slate-600 px-5 font-roboto flex items-center">Noteku</div>
        <div className="col-span-10 py-3 px-5">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="relative">
                <SearchIcon className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3 z-10" />
                <input type="text" className="h-11 w-64 text-slate-500 placeholder:text-slate-400 focus:outline-none flex justify-center items-center text-sm border border-slate-300 focus:border-slate-500 rounded-full  pl-9 pr-6" placeholder={displayPlaceholder} />
              </div>
            </div>
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
      </div>
    </header>
  );
}
