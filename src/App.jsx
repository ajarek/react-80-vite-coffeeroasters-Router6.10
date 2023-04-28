import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Plan from './pages/Plan/Plan'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: '/plan',
        element: <Plan />,
        errorElement: <Error />,
      },
    ],
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
