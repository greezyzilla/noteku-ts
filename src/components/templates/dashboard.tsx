import { ReactElement } from 'react';
import { Footer, Header, Sidebar } from '../organisms';

interface DashboardProps{
    children : ReactElement;
    filter : string;
    onSearch(_query:string) : void;
}

export default function Dashboard(props : DashboardProps) {
  const { children, filter, onSearch } = props;
  return (
    <div className="max-h-screen h-screen">
      <div className="container mx-auto flex flex-col h-full divide-y divide-slate-600/10 box-border">
        <Header filter={filter} onSearch={onSearch} />
        <main className="flex overflow-hidden h-full">
          <div className="grid grid-cols-12 divide-x divide-slate-600/10 w-full">
            <Sidebar />
            <div className="h-full lg:col-span-10 md:col-span-9 col-span-12 flex overflow-y-auto">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
