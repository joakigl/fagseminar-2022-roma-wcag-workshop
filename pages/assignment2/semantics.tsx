import { ReactElement } from 'react';
import AssignmentLayout from '../../components/Other/AssignmentLayout';
import { NextPageWithLayout } from '../_app';

const Semantics: NextPageWithLayout = () => {
  return (
    <div className="assignment_semantics_container">
      <div className="assignment_semantics-fake">Klikk her</div>
      {/* TODO: Lag en korrekt knapp */}
    </div>
  );
};

Semantics.getLayout = function getLayout(page: ReactElement) {
  return (
    <AssignmentLayout title="Semantikk">
      <>{page}</>
    </AssignmentLayout>
  );
};

export default Semantics;
