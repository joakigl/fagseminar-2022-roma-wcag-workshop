import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex max-h-full min-h-screen w-screen flex-row items-center justify-around py-2">
      <nav>
        <Link href={'/assignment1/landingside'}>
          <a className="max-w-1/5 min-w-32 p-10 border-8 m-20 font-semibold text-2xl border-gray-500">
            Oppgave 1
          </a>
        </Link>
        <Link href={'/assignment2/menu'}>
          <a className="max-w-1/5 min-w-32 p-10 border-8 m-20 font-semibold text-2xl border-gray-500">
            Oppgave 2
          </a>
        </Link>
        <Link href={'/assignment3/landingside'}>
          <a className="max-w-1/5 min-w-32 p-10 border-8 m-20 font-semibold text-2xl border-gray-500">
            Oppgave 3
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
