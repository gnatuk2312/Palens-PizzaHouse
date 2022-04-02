import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartButton from '../mainView/CartButton';
import logo from '../../img/svg/pizza-logo.svg'

const Header = () => {

	const { name, surname } = useSelector(state => {
		return state.user.user;
	});

	return (
		<header className="header">
			<div className="container">
				<a href='/' className="header__logo">
					<img width="38" src={logo} alt="Pizza logo" />
					<div>
						<h1>Palen`s PizzaHouse</h1>
						{(name || surname) ?
							<p className='header__text'>Вітаємо на сайті, {name} {surname}</p> :
							<NavLink className='header__text' to='/auth'>Увійдіть або Зареєструйтесь</NavLink>}
					</div>
				</a>
				<div className='header__buttons'>
					<CartButton />
				</div>
			</div>
		</header>
	);
};

export default Header;