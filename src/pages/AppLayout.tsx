import { Outlet } from 'react-router-dom'
import { Header, Footer, Nav } from '@/components/app'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-safe pb-safe">
        <div className="pt-20 pb-32 lg:pb-48">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Nav />
    </>
  )
}
