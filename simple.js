import { sleep } from 'k6';
import http from 'k6/http';



export default function () {
  const response = http.get('http://localhost:8003/products?page=1&limit=10');

}

//https://test-api.k6.io/public/crocodiles/