import Link from 'next/link';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import SolutionLayout from '../../components/SolutionLayout';

const Telefon: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>

      <Link href="/">
        <a>Tilbake</a>
      </Link>
      <Link href="/assignment1/stage2">
        <a>Neste</a>
      </Link>
    </div>
  );
};

Telefon.getLayout = function getLayout(page: ReactElement) {
  return (
    <SolutionLayout path="assignment1">
      <>{page}</>
    </SolutionLayout>
  );
};

export default Telefon;
