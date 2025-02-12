import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { HttpService } from './services';

function App() {
  HttpService.httpClient.request({
    url: '/weather/Curitiba',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        // For example, add a custom header only for this request:
        console.log('Per-request request interceptor - Success:', config);
        return config;
      },
      responseInterceptor: (response) => {
        // For example, log the response or modify it before returning:
        console.log('Per-request response interceptor - Success:', response);
        return response;
      },
    },
  });

  return <RouterProvider router={router} />;
}

export default App;
