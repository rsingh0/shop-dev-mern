import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreens from './screens/HomeScreens';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
