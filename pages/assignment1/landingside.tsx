import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import SolutionLayout from '../../components/SolutionLayout';

const Landingside: NextPageWithLayout = () => {
  return (
    <div className="">
      <img className="content-start-image" src="/start_pizza.png" />
      <button className="content-start-image--button">Betal Pizza</button>

      <div className="content-start-information">
        <img className="content-start-title--image" src="/title.png" />
        Pappas pizza er en god og ærverdig pizzaresturant som i 1987 starten sin
        virksomhet som den eneste og beste matresturanten i bydelen som i 1995
        ble ble sentral i spisestedsoppvåkningen som tiltrakk seg spisegjester
        til våre lokaler. Ved å flytte til andre lokaler i 1999 fikk vi
        muligheten til å vokse mye og derfor lage enda bedre pizza i mange
        størrelser som kunne gi hvem som helst vann i munn og ønske om å
        bestille en pizza til familien eller naboen. Vi har i samarbeid med våre
        naboer utviklet konseptet “si hva du vil ha og så gjør vi det klart så
        du kan bære det med deg til et annet sted og spise
      </div>
    </div>
  );
};

Landingside.getLayout = function getLayout(page: ReactElement) {
  return (
    <SolutionLayout path="assignment1">
      <>{page}</>
    </SolutionLayout>
  );
};

export default Landingside;
