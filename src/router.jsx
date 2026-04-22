import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProfilePage from './pages/profile';
import Feedback from './pages/feedback';

import NotFound from './notFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
