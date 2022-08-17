import {
  ArchiveIcon, PencilAltIcon, StarIcon, TrashIcon,
} from '@heroicons/react/solid';
import { NoteInterface } from '../../../interfaces';
import { showFormattedDate } from '../../../utils';
import NoteAction from './noteAction';

interface NoteProps extends NoteInterface{
    onDelete(_id: number): void;
    onArchive(_id: number): void;
    onStar(_id: number): void;
}

export default function Note(props : NoteProps) {
  const {
    id, title, body, createdAt, onDelete, onArchive, onStar, archived, starred,
  } = props;

  return (
    <div key={id} className="box-border flex min-h-[350px] flex-col gap-2 rounded-md border border-slate-300 ring-slate-100 hover:ring-4">
      <div className="px-4 pt-4">
        <p className="text-xs font-light text-slate-600">{showFormattedDate(createdAt)}</p>
        <h5 className="text-lg font-semibold text-slate-600">{title}</h5>
      </div>
      <div className="flex h-full flex-col justify-between px-2 pb-2">
        <p className="mb-3 h-fit px-2 text-sm font-normal leading-[170%] text-slate-600">{body}</p>
        <div className="flex gap-1">
          <NoteAction
            Icon={TrashIcon}
            label="Delete"
            onClick={() => onDelete(+id)}
            isFirst
          />
          <NoteAction
            Icon={PencilAltIcon}
            label="Edit"
            onClick={() => onDelete(+id)}
          />
          <NoteAction
            Icon={ArchiveIcon}
            label="Archive"
            onClick={() => onArchive(+id)}
            isActive={archived}
          />
          <NoteAction
            Icon={StarIcon}
            label="Star"
            onClick={() => onStar(+id)}
            isActive={starred}
          />
        </div>
      </div>
    </div>
  );
}
