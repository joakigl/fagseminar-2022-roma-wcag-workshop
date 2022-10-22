import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import SolutionLayout from '../../components/SolutionLayout';
import { ExpandedCard, OrderCard } from '../../components/Card';
import { Pizza } from '../../utils/types';

const FaaPizza: NextPageWithLayout = () => {
  const pizza: Record<string, Pizza> = require('./../../content/pizza.json');
  const [selectedPizza, setSelectedPizza] = useState<string>('');

  return (
    <div className="flex flex-col main-container-box">
      <h2 className="main-container--title">Italiensk pizza</h2>

      <div className="content-card-container">
        {Object.keys(pizza).map((key) => {
          if (key === selectedPizza) {
            return (
              <ExpandedCard
                key={`pizza_${key}`}
                title={key}
                onClick={() => {
                  setSelectedPizza('');
                }}
                imageUrl={pizza[key].imageUrlLarge}
                ingredients={pizza[key].defaultIngredients}
              />
            );
          } else {
            return (
              <OrderCard
                key={`pizza_${key}`}
                title={key}
                onClick={() => {
                  setSelectedPizza(key);
                }}
                imageUrl={pizza[key].imageUrlSmall}
                ingredients={pizza[key].defaultIngredients}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

FaaPizza.getLayout = function getLayout(page: ReactElement) {
  return (
    <SolutionLayout path="assignment1">
      <>{page}</>
    </SolutionLayout>
  );
};

export default FaaPizza;
