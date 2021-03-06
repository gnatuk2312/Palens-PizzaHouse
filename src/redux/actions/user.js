import axios from "axios";
import toast from "react-hot-toast";
import { SET_USER, DELETE_USER } from '../types';

export const registerUser = (name, surname, login, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/signup', {
				"login": login,
				"name": name,
				"surname": surname,
				"password": password
			}).catch(e => {
				throw e;
			});

			if (response.status === 201) {
				dispatch({
					type: SET_USER,
					payload: response.data
				});

				toast.success('Ваш аккаунт успішно зареєстровано');
			};

		} catch (err) {
			const error = Number(err.message.substring(err.message.length - 3, err.message.length));

			switch (error) {
				case 400:
					toast.error('Упс.. Щось пішло не так...');
					break;
				case 404:
					toast.error('Упс.. Щось пішло не так...');
					break;
				case 409:
					toast.error('Цей Логін вже Зареєстрований');
					break;
				case 500:
					toast.error('Схоже у нас проблеми з сервером... Спробуйте пізніше');
					break;
				default:
					toast.error(`Упс.. Щось пішло не так... Деталі: ${err} `);
					break;
			};
		}
	};
};

export const loginUser = (login, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/signin', {
				"login": login,
				"password": password
			}).catch(e => {
				throw e;
			});

			if (response.status === 200) {
				dispatch({
					type: SET_USER,
					payload: response.data
				});

				toast.success(`Вітаємо вас, ${response.data.user.name}`);
			};

		} catch (err) {
			const error = Number(err.message.substring(err.message.length - 3, err.message.length));

			switch (error) {
				case 400:
					toast.error('Упс.. Щось пішло не так...');
					break;
				case 401:
					toast.error('Невірний Логін або Пароль');
					break;
				case 404:
					toast.error('Упс.. Щось пішло не так...');
					break;
				case 500:
					toast.error('Схоже у нас проблеми з сервером... Спробуйте пізніше');
					break;
				default:
					toast.error(`Упс.. Щось пішло не так... Деталі: ${err} `);
					break;
			};
		}
	};
};

export const logoutUser = (token) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/logout', {}, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}).catch(e => {
				throw e;
			});

			if (response.status === 204) {
				dispatch({ type: DELETE_USER })
			}
			toast.success('Ви успішно вийшли з аккаунта');


		} catch (err) {
			toast.error('Не вдалось вийти з аккаунта')
		}
	};
};

export const currentUser = (token) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/current', {}, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			dispatch({
				type: SET_USER,
				payload: response.data
			});

			toast.success(`З поверненням, ${response.data.user.name}!`);

		} catch (err) {
			console.log(err);
		}
	}
}