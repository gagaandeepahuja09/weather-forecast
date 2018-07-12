import axios from 'axios';

const API_KEY = '41d514b25c8e40358b87784e2073e009';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const promise = axios.get(url);
	console.log('Promise', promise);

	return {
		type: FETCH_WEATHER,
		payload: promise
	};
}
