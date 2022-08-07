import { ArchiveIcon, StarIcon, TrashIcon } from '@heroicons/react/solid';
import { NoteInterface } from '../../interfaces';
import { showFormattedDate } from '../../utils';

interface NoteProps extends NoteInterface{
    onDelete(_id: number): void;
    onArchive(_id: number): void;
    onStar(_id: number): void;
}

export default function Note(props : NoteProps) {
  const {
    id, title, body, createdAt, onDelete, onArchive, onStar, archived, starred,
  } = props;

  const icons = {
    trash: <TrashIcon className="w-4 h-4" />,
    archive: <ArchiveIcon className="w-4 h-4" />,
    star: <StarIcon className="w-4 h-4" />,
  };

  const buttonNormalClass = 'flex-1 text-sm justify-center flex bg-slate-50 p-3 text-slate-500 hover:scale-x-110 hover:scale-y-125 hover:bg-slate-500 hover:text-white transition';
  const buttonActiveClass = 'flex-1 text-sm justify-center flex bg-slate-500 p-3 text-white hover:scale-x-110 hover:scale-y-125 hover:bg-slate-600 hover:text-white transition';

  const deleteButtonClass = ['rounded-bl-md', buttonNormalClass].join(' ');
  const archivedButtonClass = archived ? buttonActiveClass : buttonNormalClass;
  const starButtonClass = ['rounded-br-md', starred ? buttonActiveClass : buttonNormalClass].join(' ');

  return (
    <div key={id} className="flex flex-col gap-2 box-border border border-slate-300 hover:ring-4 ring-slate-100 rounded-md">
      <div className="px-4 pt-4">
        <p className="text-slate-600 text-xs font-light">{showFormattedDate(createdAt)}</p>
        <h5 className="font-semibold text-slate-600 text-lg">{title}</h5>
      </div>
      <div className="h-full flex flex-col justify-between px-2 pb-2">
        <p className="text-sm text-slate-600 h-fit mb-3 px-2 font-normal leading-[170%]">{body}</p>
        <div className="flex gap-1">
          <button type="button" onClick={() => onDelete(+id)} className={deleteButtonClass}>
            {icons.trash}
          </button>
          <button type="button" onClick={() => onArchive(+id)} className={archivedButtonClass}>
            {icons.archive}
          </button>
          <button type="button" onClick={() => onStar(+id)} className={starButtonClass}>
            {icons.star}
          </button>
        </div>
      </div>
    </div>
  );
}
