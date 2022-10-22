import { NextPage } from 'next';
import Link from 'next/link';

const Menu: NextPage = () => {
  return (
    <nav className="flex max-h-full min-h-screen w-screen flex-row items-center justify-around flex-wrap">
      <Link href={'/assignment2/semantics'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Semantikk
        </a>
      </Link>
      <Link href={'/assignment2/ordering'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Rekkefølge
        </a>
      </Link>
      <Link href={'/assignment2/aria'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Aria-{'{'}x{'}'}
        </a>
      </Link>
      <Link href={'/assignment2/tabindex'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Tabindeksering
        </a>
      </Link>
      <Link href={'/assignment2/alternates'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Alternativ presentasjon
        </a>
      </Link>
      <Link href={'/assignment2/div'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          {'<'}Div{'>'}
        </a>
      </Link>
      <Link href={'/assignment2/clarity'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Klarhet
        </a>
      </Link>
      <Link href={'/assignment2/styling'}>
        <a className="max-w-1/5 min-w-32 p-10 border-8 m-10 font-semibold text-2xl border-gray-500">
          Styling
        </a>
      </Link>
    </nav>
  );
};

export default Menu;
