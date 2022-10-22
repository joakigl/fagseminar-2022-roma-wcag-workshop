import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import SolutionLayout from '../../components/SolutionLayout';

const OmOss: NextPageWithLayout = () => {
  return <div className=""></div>;
};

OmOss.getLayout = function getLayout(page: ReactElement) {
  return (
    <SolutionLayout path="assignment1">
      <>{page}</>
    </SolutionLayout>
  );
};

export default OmOss;
