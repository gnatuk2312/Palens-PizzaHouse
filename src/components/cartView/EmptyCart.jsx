import React from 'react';
import { NavLink } from "react-router-dom";
import emptyCart from '../../img/empty-cart.png';

const EmptyCart = () => {
	return (
		<section className="content">
			<div className="container container--cart">
				<div className="cart cart--empty">
					<h2>Корзина порожня <i>💔</i></h2>
					<p>
						Скоріш за все ви ще нічого не замовили. Поверніться на головну сторінку та оберіть що бажаєте, натисніть кнопку "Добавити" та перейдіть в Корзину 💕.
					</p>
					<div className='image-container'>
						<img src={emptyCart} alt='Корзина порожня' />
					</div>
					<NavLink to="/" className="button button--black">
						<span>Повернутись назад</span>
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default EmptyCart;