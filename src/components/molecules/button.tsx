import { ReactElement } from 'react';

interface ButtonProps{
    onClick() : void;
    children: ReactElement
    className: string;
}

export default function Button(props : ButtonProps) {
  const { children = 'button', onClick = () => {}, className = '' } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
