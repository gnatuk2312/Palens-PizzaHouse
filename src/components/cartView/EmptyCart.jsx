import React from 'react';
import emptyCart from '../../img/empty-cart.png';

const EmptyCart = () => {
	return (
		<div className="content">
			<div className="container container--cart">
				<div className="cart cart--empty">
					<h2>Корзина пустая <i>😕</i></h2>
					<p>
						Вероятней всего, вы не заказывали ещё пиццу.<br />
						Для того, чтобы заказать пиццу, перейди на главную страницу.
					</p>
					<img src={emptyCart} alt='Корзина порожня' />
					<a href="/" className="button button--black">
						<span>Вернуться назад</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;