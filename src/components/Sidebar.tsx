import Logo from "./Logo";

type SidebarProps = {
  signOut: () => void;
};

const Sidebar = ({ signOut }: SidebarProps) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-[300px] flex flex-col justify-between items-center bg-slate-900 text-slate-50 z-10 py-10">
      <Logo />
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/" className="hover:text-slate-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/inbox" className="hover:text-slate-200">
              Inbox
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-slate-200">
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Sidebar;
