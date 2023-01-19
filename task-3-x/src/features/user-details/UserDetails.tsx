import { Link, Outlet, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useGetUserQuery } from 'store';
import { NavTabs } from 'components/NavTabs';
import { Loader } from 'components/Loader';
import { ErrorPage } from 'components/ErrorPage';
import { Avatar } from 'components/Avatar';

const navLinks = [
  { to: '', label: 'About me' },
  { to: 'albums', label: 'My albums' },
  { to: 'todos', label: 'My todos' },
  { to: 'posts', label: 'My posts' },
];

export const UserDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError || !data) {
    return <ErrorPage />;
  }

  const { name, avatar } = data;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-6 bg-accent">
        <Link
          className="flex items-center justify-center w-8 h-8 text-white border border-white rounded-full hover:text-accent hover:bg-white"
          to="/users"
        >
          <AiOutlineArrowLeft size={18} />
        </Link>

        <div className="pt-6">
          <NavTabs links={navLinks} />
        </div>
        <Avatar className="border-white" src={avatar} alt={name} size={40} />
      </div>

      <div className="px-8 py-10">
        <Outlet />
      </div>
    </div>
  );
};
