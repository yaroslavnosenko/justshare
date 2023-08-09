import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AppLayout,
  HomePage,
  ProfilePage,
  SavedPage,
  NewLinkPage,
} from '@/pages'
import '@fontsource-variable/outfit'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/*',
    element: <AppLayout />,
    children: [
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'profile/new-link',
        element: <NewLinkPage />,
      },
      {
        path: 'saved',
        element: <SavedPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
