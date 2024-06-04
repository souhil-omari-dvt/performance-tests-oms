import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
	stages: [
		{ duration: '30s', target: 20 }, // ramp up
		{ duration: '1m', target: 20 }, // stable
		{ duration: '30s', target: 80 }, // ramp up
		{ duration: '1m', target: 80 }, // stable
		{ duration: '30s', target: 100 }, // ramp up
		{ duration: '2m', target: 100 }, // stable
		{ duration: '2m', target: 0 }, // ramp-down to 0 users
	],
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
};

export default () => {
	const random= getRandomNumber()
	const res = http.get(`http://localhost:8003/products?page=${random}&limit=10`);
	check(res, { '200': (r) => r.status === 200 });
	sleep(1);
};