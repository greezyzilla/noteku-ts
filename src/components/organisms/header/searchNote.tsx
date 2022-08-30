import { SearchIcon } from '@heroicons/react/solid';
import { ChangeEvent } from 'react';

interface SearchNoteProps{
  filter: string;
  onSearch(_query : string) : void;
}

export default function SearchNote(props: SearchNoteProps) {
  const { filter, onSearch } = props;

  const changeHandle = (event : ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex">
      <input
        type="search"
        className="-mr-10 flex h-full w-48 items-center justify-center border-slate-300 pl-4 pr-12 text-xs text-slate-600 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 sm:-mr-12  sm:w-64 sm:text-sm"
        placeholder="Search note here..."
        value={filter}
        onChange={changeHandle}
      />
      <div className="flex h-10 w-10 items-center justify-center bg-blue-500 sm:h-12 sm:w-12">
        <SearchIcon className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}
