import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { LoginUser, LogoutUser } from "../../redux/user/actions";
import { selectProductCount } from "../../redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const productsCount = useSelector(selectProductCount);


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(LoginUser({ name: 'stanley', email: 'stanley@email.com' }))
  };

  const handleLogoutClick = () => {
    dispatch(LogoutUser());
  };


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
