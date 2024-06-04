import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(70)<100'], // 99% of requests must complete within 100ms
}
};


export default function () {
  const response = http.get('http://localhost:8003/products?page=1&limit=10');
  sleep(1);
}

//https://test-api.k6.io/public/crocodiles/