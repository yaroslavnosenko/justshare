import { Outlet } from 'react-router-dom'
import { Header, Footer, Nav } from '@/components/app'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Nav />
    </>
  )
}
