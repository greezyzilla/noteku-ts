import { ReactElement } from 'react';

interface ButtonProps{
    onClick: (() => void) | ((_cb : () => void) => void);
    children: ReactElement | string;
    className: string;
}

export default function Button(props : ButtonProps) {
  const { children = 'button', onClick = () => {}, className = '' } = props;

  return (
    <button
      type="button"
      onClick={(_any? : any) => onClick(_any)}
      className={className}
    >
      {children}
    </button>
  );
}
