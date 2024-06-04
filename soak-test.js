import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';


export const options = {
    stages: [
      { duration: '5m', target: 200 }, 
      { duration: '8h', target: 200 },
      { duration: '5m', target: 0 }, 
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