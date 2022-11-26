import Finder from '../components/Finder/Finder'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

const Home = () => {
  return (
    <>
      <Navigation />
      <h1 className="mx-10 sm:m-10 text-3xl flex justify-center text-center">
        Envia dinero a casa al mejor precio
      </h1>
      <Finder />
      <Footer />
    </>
  )
}

export default Home
