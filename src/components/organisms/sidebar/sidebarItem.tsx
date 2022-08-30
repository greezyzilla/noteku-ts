import classcat from 'classcat';
import { ComponentProps, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps{
    path: string;
    Icon(_props : ComponentProps<'svg'>): ReactElement;
    label: string;
}

interface NavlinkClassInterface{
  isActive : boolean;
}

export default function SidebarItem(props : SidebarItemProps) {
  const {
    path = '/', Icon, label,
  } = props;

  const getLinkClassname = (active : boolean) => classcat({
    'group flex items-center gap-2 py-3 px-2 text-sm hover:bg-gradient-to-bl': true,
    'border-r-4 border-blue-500 bg-gradient-to-bl from-blue-100 font-semibold text-slate-500': active,
    'text-slate-500 hover:from-slate-100 hover:text-slate-600': !active,
  });

  const getIconClassname = (active : boolean) => classcat({
    'rounded-sm p-1': true,
    'bg-slate-400 text-white group-hover:bg-slate-500': !active,
    'bg-blue-400 text-white': active,
  });

  return (
    <NavLink
      to={path}
      className={({ isActive } : NavlinkClassInterface) => getLinkClassname(isActive)}
    >
      {({ isActive } : any) => (
        <>
          <div className={getIconClassname(isActive)}>
            <Icon className="h-4 w-4" />
          </div>
          <p>{label}</p>
        </>
      )}
    </NavLink>
  );
}
