import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import SolutionLayout from '../../components/SolutionLayout';
import { MenuCard } from '../../components/Card';

const Spisekart: NextPageWithLayout = () => {
  const pizza: Record<string, any> = require('./../../content/pizza.json');
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="main-container-box">
      <h2 className="main-container--title">Italiensk pizza</h2>

      {!clicked ? (
        <div className="content-card-container">
          {Object.keys(pizza).map((key) => {
            return (
              <MenuCard
                key={`pizza_${key}`}
                title={key}
                onClick={() => {
                  setClicked(true);
                }}
                imageUrl={pizza[key].imageUrlSmall}
                ingredients={pizza[key].defaultIngredients}
              />
            );
          })}
        </div>
      ) : (
        <div className="content-message-box">
          <a className="content-message-box--text" href="/assignment1/faapizza">
            Gå til <span className="italic">Få Pizza</span> for å se spisekart
          </a>
        </div>
      )}
    </div>
  );
};

Spisekart.getLayout = function getLayout(page: ReactElement) {
  return (
    <SolutionLayout path="assignment1">
      <>{page}</>
    </SolutionLayout>
  );
};

export default Spisekart;
