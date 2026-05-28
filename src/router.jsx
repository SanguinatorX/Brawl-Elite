import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProfilePage from './pages/profile';
import Feedback from './pages/feedback';
import Settings from './pages/settings';
import Contacts from './pages/contacts';

import NotFound from './notFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
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
