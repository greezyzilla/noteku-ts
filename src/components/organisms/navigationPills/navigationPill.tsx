import classcat from 'classcat';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationPillProps{
  children : ReactNode;
  href : string;
}

interface NavLinkInterface{
  isActive : boolean
}

export default function NavigationPill(props : NavigationPillProps) {
  const { children, href } = props;

  const getNavlinkClassname = (active : boolean) => classcat({
    'whitespace-nowrap rounded-full px-2 py-1 text-sm hover:ring-4 hover:ring-blue-100 sm:px-4 sm:py-2': true,
    'bg-white/90 text-slate-500 hover:text-slate-600': !active,
    'bg-blue-500 text-white': active,
  });
  return (
    <NavLink
      to={href}
      className={({ isActive } : NavLinkInterface) => getNavlinkClassname(isActive)}
    >
      {children}
    </NavLink>
  );
}
