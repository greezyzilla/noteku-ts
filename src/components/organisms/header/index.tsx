import ChangeColor from './changeColor';
import SearchNote from './searchNote';
import ToggleDarkMode from './toggleDarkMode';

interface HeaderProps{
  filter: string;
  onSearch(_query: string) : void;
}

export default function Header(props : HeaderProps) {
  const { filter, onSearch } = props;

  return (
    <header className="flex w-full h-fit">
      <div className="grid grid-cols-12 w-full flex-1">
        <div className="col-span-2 py-3 text-2xl font-semibold text-slate-600 px-5 font-roboto flex items-center">Noteku</div>
        <div className="col-span-10 py-3 px-5">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <SearchNote filter={filter} onSearch={onSearch} />
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <ToggleDarkMode />
              <ChangeColor />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
