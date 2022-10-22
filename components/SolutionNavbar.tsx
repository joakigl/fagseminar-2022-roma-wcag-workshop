import Link from 'next/link';
import { Menu } from '@carbon/icons-react';

type Props = {
  path: string;
};

export default function SolutionNavbar({ path }: Props) {
  return (
    <div className="navbar-container">
      <div className="navbar-columns navbar-columns-left">
        <img
          src="/pizza-logo-vector.svg"
          width={'24px'}
          height={'24px'}
          className="navbar-columns-left--items"
        />
      </div>
      <div className="navbar-columns navbar-columns-middle">
        <button className="navbar-columns-middle--items">
          <Link href={`/${path}/spisekart`}>
            <a>Spisekart</a>
          </Link>
        </button>
        <button className="navbar-columns-middle--items">
          <Link href={`/${path}/faapizza`}>
            <a>Få pizza</a>
          </Link>
        </button>
        <button className="navbar-columns-middle--items">
          <Link href={`/${path}/telefon`}>
            <a>Telefon</a>
          </Link>
        </button>
        <button className="navbar-columns-middle--items">
          <Link href={`/${path}/landingside`}>
            <a>Om oss</a>
          </Link>
        </button>
      </div>
      <div className="navbar-columns navbar-columns-right">
        <Menu
          className="navbar-columns-right--items"
          width={'32px'}
          height={'32px'}
        />
      </div>
    </div>
  );
}
