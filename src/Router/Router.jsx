import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Page/Home';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import News from '../Page/News/News';
import PrivetRouter from './PrivetRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('news.json'),
      },
      {
        path: '/news/:id',
        element: (
          <PrivetRouter>
            <News></News>
          </PrivetRouter>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
