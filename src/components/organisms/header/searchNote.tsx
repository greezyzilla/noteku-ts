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
    <div className="relative">
      <SearchIcon className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3 z-10" />
      <input
        type="text"
        className="h-11 w-64 text-slate-500 placeholder:text-slate-400 focus:outline-none flex justify-center items-center text-sm border border-slate-300 focus:border-slate-500 rounded-full  pl-9 pr-6"
        placeholder="Search note here..."
        value={filter}
        onChange={changeHandle}
      />
    </div>
  );
}
