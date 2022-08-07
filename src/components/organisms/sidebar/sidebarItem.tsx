import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps{
    path: string;
    icon: ReactElement;
    label: string;
}

interface NavlinkClassInterface{
  isActive : boolean;
}

export default function SidebarItem(props : SidebarItemProps) {
  const {
    path = '/', icon, label,
  } = props;

  const activeClass = 'bg-gradient-to-l border-r-4';
  const normalClass = 'flex px-5 py-3 items-center gap-2 hover:bg-gradient-to-l from-slate-200 text-slate-500 border-slate-500';
  const mergedClass = [normalClass, activeClass].join(' ');

  return (
    <NavLink
      to={path}
      className={({ isActive } : NavlinkClassInterface) => (isActive ? mergedClass : `${normalClass} font-light`)}
    >
      {icon}
      <p>{label}</p>
    </NavLink>
  );
}
