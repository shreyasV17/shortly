import Head from 'next/head'
import Image from 'next/image'
import GlobalStyles from '../components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandStatistics from '../components/BrandStatistics';
import InputBar from '../components/InputBar';
import ListGroup from '../components/ListGroup';
import Banner from '../components/Banner';
//import useLinks from '../hooks/useLinks';

const theme = {
  colors: {
    header: '#ffffff',
    body: '#35323e',
    footer: '#232127',
    brand: '#ffffff',
    darkViolet: '#3b3054',
  },
}

const Home = () => {
//  const [links, shorten] = useLinks('');

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Header />
      <Banner />
      <div>
        <InputBar />
        <ListGroup />
      </div>
      <BrandStatistics />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;