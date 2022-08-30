import { NoteInterface } from '../../interfaces';
import { Note } from '../molecules';

interface NoteListProps{
  notes : NoteInterface[];
  onArchive(_id: number) : void;
  onStar(_id: number) : void;
  onDelete(_id: number) : void;
  onEdit(_id: number, _note: NoteInterface) : void;
}

export default function NoteList(props : NoteListProps) {
  const { notes, ...methods } = props;

  const notesElement = notes.map((note : NoteInterface) => (
    <Note
      {...note}
      key={note.id}
      {...methods}
    />
  ));

  return (
    <div className="box-border flex h-full w-full">
      {
        notesElement.length ? (
          <div className="box-border grid h-fit w-full grid-cols-1 gap-4 overflow-auto px-5 py-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            { notesElement }
          </div>
        ) : (
          <div className="mx-5 mt-3 box-border flex w-full flex-col items-center justify-center bg-white/80 md:ml-3 xl:mr-3">
            <div className="flex flex-col items-center justify-center">
              <img src="./404.gif" alt="404" className="-mt-24 -mb-16 h-72 w-72 sm:h-80 sm:w-80" />
              <p className="text-center text-sm font-semibold leading-4 text-slate-500 sm:text-lg sm:leading-7">
                Whooopss... no note found
                <br />
                But you can always create the new one!
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}
