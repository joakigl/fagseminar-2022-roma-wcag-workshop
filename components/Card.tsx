import Image from 'next/image';
import React, { useState } from 'react';
import Circle from './Circle';

import allIngredients from '../content/ingredients.json';
import { Ingredients } from '../utils/types';
import {
  ArrowRight,
  Checkbox,
  CheckboxChecked,
  RadioButton,
  RadioButtonChecked,
} from '@carbon/icons-react';
import { storageSet } from '../utils/localstorageUtils';

interface Props {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onButtonClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  imageUrl: string;
  ingredients: string[];
}

const MenuCard: React.FC<Props> = ({
  onClick,
  title,
  imageUrl,
  ingredients,
}) => {
  return (
    <div className={`content-menu-card`} onClick={onClick}>
      <h4 className="content-menu-card--title">{title}</h4>
      <Image src={`${imageUrl}`} width={'254px'} height={'170px'} />
      <div className="content-menu-card--ingredients">
        {ingredients.join(', ')}
      </div>
    </div>
  );
};

const OrderCard: React.FC<Props> = ({
  onClick,
  title,
  imageUrl,
  ingredients,
  onButtonClick,
}) => {
  return (
    <div className={`content-order-card`} onClick={onClick}>
      <h4 className="content-order-card--title">{title}</h4>
      <Image src={`${imageUrl}`} width={'254px'} height={'170px'} />
      <div className="content-order-card--ingredients">
        {ingredients.join(', ')}
      </div>
      <button className="content-order-card--button" onClick={onButtonClick}>
        Vil ha denne
      </button>
    </div>
  );
};

const ExpandedCard: React.FC<Props> = ({ title, imageUrl, ingredients }) => {
  storageSet('currentPizza', title);
  storageSet('currentIngredients', ingredients);
  const [step, setStep] = useState<string>('one');
  const [selectedIngredients, setSelectedIngredients] =
    useState<string[]>(ingredients);

  const ingredientFix = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter(
          (existingIngredient) => existingIngredient !== ingredient
        )
      );
    } else {
      const addedIngredients = selectedIngredients;
      addedIngredients.push(ingredient);
      setSelectedIngredients(addedIngredients);
    }
  };

  return (
    <div className={`content-expanded-card`}>
      <h4 className="content-expanded-card--title">{title}</h4>
      <Image src={`${imageUrl}`} width={'1035px'} height={'233px'} />
      {step === 'one' ? (
        StepOne(
          selectedIngredients,
          (arg0: string) => ingredientFix(arg0),
          (arg0: string) => setStep(arg0)
        )
      ) : step === 'two' ? (
        <div className="content-expanded-card--order">
          <div className="content-expanded-card--order-type">
            <h5 className="content-expanded-card--order-title">Når</h5>
            <input className="content-expanded-card--order-text"></input>
          </div>
          <div className="content-expanded-card--order-type">
            <h5 className="content-expanded-card--order-title">Navn</h5>
            <input className="content-expanded-card--order-text"></input>
          </div>
          <div className="content-expanded-card--order-type">
            <h5 className="content-expanded-card--order-title">E-post</h5>
            <input className="content-expanded-card--order-text"></input>
          </div>
        </div>
      ) : (
        <StepThree />
      )}
    </div>
  );
};

const IngredientLine = (
  name: string,
  ingredient: Ingredients,
  defaultChecked: boolean,
  changeIngredients: (arg0: string) => void
) => {
  const [checkedBox, setCheckedBox] = useState<boolean>(
    ingredient.component === 'checkbox' && defaultChecked
  );
  const [checkedRadio, setCheckedRadio] = useState<boolean>(
    ingredient.component === 'radio' && defaultChecked
  );

  return (
    <div
      key={`ingredient_name_${name}`}
      className="content-expanded-card--ingredients--choice-container"
    >
      <p className="content-expanded-card--ingredients--choice-name">{name}</p>
      {ingredient.component === 'radio' ? (
        <>
          {!checkedRadio ? (
            <RadioButton
              onClick={() => {
                setCheckedRadio(true);
                changeIngredients(name);
              }}
              key={`${name}_radio`}
              className="content-expanded-card--ingredients--choice-radio"
            />
          ) : (
            <RadioButtonChecked
              onClick={() => {
                setCheckedRadio(false);
                changeIngredients(name);
              }}
              key={`${name}_radio_checked`}
              className="content-expanded-card--ingredients--choice-radio"
            />
          )}
        </>
      ) : (
        <>
          {!checkedBox ? (
            <Checkbox
              onClick={() => {
                setCheckedBox(true);
                changeIngredients(name);
              }}
              key={`${name}_checkbox`}
              className="content-expanded-card--ingredients--choice-checkbox"
            />
          ) : (
            <CheckboxChecked
              onClick={() => {
                setCheckedBox(false);
                changeIngredients(name);
              }}
              key={`${name}_checkbox_checked`}
              className="content-expanded-card--ingredients--choice-checkbox"
            />
          )}
        </>
      )}
      <Circle
        key={`${name}_available`}
        color={ingredient.available === 'yes' ? 'green' : 'red'}
        size="22px"
      />
    </div>
  );
};

const StepOne = (
  ingredients: string[],
  ingredientFix: (arg0: string) => void,
  increaseStep: (arg0: string) => void
) => {
  return (
    <div className="content-expanded-card--ingredients">
      <p className="content-expanded-card--ingredients--title">Topping valg</p>
      <div className="content-expanded-card--ingredients--choice">
        {Object.keys(allIngredients).map((key) =>
          IngredientLine(
            key,
            allIngredients[key],
            ingredients.includes(key),
            ingredientFix
          )
        )}
      </div>
      <div className="content-expanded-card--ingredients--information">
        <div className="content-expanded-card--ingredients--information-text">
          <p className="content-expanded-card--ingredients--information-text-font">
            Tilgjengelig
          </p>
          <Circle size="22px" color="green" />
          <p className="content-expanded-card--ingredients--information-text-font">
            Ikke tilgjengelig
          </p>
          <Circle size="22px" color="red" />
        </div>
        <button
          className="content-expanded-card--ingredients--information-button"
          onClick={() => increaseStep('two')}
        >
          {<ArrowRight />}
        </button>
      </div>
    </div>
  );
};

export { MenuCard, OrderCard, ExpandedCard };
