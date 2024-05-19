import sprite from "../../assets/icons/icons.svg";
import { LogoContainer } from './Logo.styled';
import { Link, useParams } from 'react-router-dom';

const Logo = () => {
  const path = useParams();
  console.log(path);

  return (
    <LogoContainer>
      <Link to={'/home'}>
        <svg>
          <use
            xlinkHref={`${sprite}#icon-logo`}
          ></use>
        </svg>
      </Link>
    </LogoContainer>
  );
};

export default Logo;

// xlinkHref={
//   path
//   ? `${sprite}#icon-logo-white`
//   : `${sprite}#icon-logo-header`
// }