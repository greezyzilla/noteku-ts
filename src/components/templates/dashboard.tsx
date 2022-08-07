import { ReactElement } from 'react';
import { Footer, Header, Sidebar } from '../organisms';

interface DashboardProps{
    children : ReactElement;
    placeholder : string;
}

export default function Dashboard(props : DashboardProps) {
  const { children, placeholder } = props;
  return (
    <div className="max-h-screen h-screen">
      <div className="container mx-auto flex flex-col h-full divide-y divide-slate-600/10 box-border">
        <Header placeholder={placeholder} />
        <main className="flex overflow-hidden h-full">
          <div className="grid grid-cols-12 divide-x divide-slate-600/10 w-full">
            <Sidebar />
            <div className="h-full col-span-10 flex overflow-y-auto">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
