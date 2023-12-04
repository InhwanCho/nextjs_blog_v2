import '@/css/tailwind.css'
import Header from './about-Components/Header'
import ActiveSectionContextProvider from './context/Active-section-context'
import { Toaster } from 'react-hot-toast'
import { Banner } from '@/layouts/PostBanner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="top-32 !scroll-smooth pt-28 sm:pt-36 ">
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Banner />
        <Toaster position="top-right" />
      </ActiveSectionContextProvider>
    </div>
  )
}
