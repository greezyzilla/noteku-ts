import { KeyboardEvent, MouseEvent, ReactElement } from 'react';

interface ModalProps{
    children : ReactElement | string;
    onClose() : void;
}

export default function modal(props : ModalProps) {
  const { children, onClose } = props;

  const enterKeyHandle = (event : KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      tabIndex={0}
      role="button"
      onKeyDown={enterKeyHandle}
      className="absolute z-50 w-screen h-screen left-0 top-0 flex justify-center items-center bg-slate-800/80 cursor-default"
    >
      <div
        className="bg-white p-10 cursor-default rounded-lg"
        onClick={(e : MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        onKeyDown={() => {}}
        tabIndex={0}
        role="button"
      >
        {children}
      </div>
    </div>
  );
}
