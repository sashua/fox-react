import { useParams } from 'react-router-dom';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineCluster,
} from 'react-icons/ai';
import { useGetUserQuery } from 'store';
import { ErrorPage } from 'components/ErrorPage';
import { Info } from 'components/Info';
import { Loader } from 'components/Loader';
import { Avatar } from 'components/Avatar';

export const AboutUser: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (isError || !data) {
    return <ErrorPage />;
  }

  const {
    name,
    username,
    avatar,
    email,
    phone,
    address: { street, suite, city, zipcode },
    company,
  } = data;

  return (
    <div className="flex items-center gap-32 w-fit mx-auto">
      <div className="text-center">
        <Avatar className="mb-4" src={avatar} alt={name} size={256} />
        <h4 className="mb-2 font-semibold text-2xl">{name}</h4>
        <p className="text-lg text-middle">"{username}"</p>
      </div>

      <div className="flex flex-col gap-6">
        <Info icon={AiOutlineMail} caption="Email" lines={[email]} />
        <Info icon={AiOutlinePhone} caption="Phone" lines={[phone]} />
        <Info
          icon={AiOutlineEnvironment}
          caption="Work"
          lines={[company.name, `${street}, ${suite}`, `${city}, ${zipcode}`]}
        />
        <Info
          icon={AiOutlineCluster}
          caption="Segments"
          lines={[company.catchPhrase, company.bs]}
        />
      </div>
    </div>
  );
};
