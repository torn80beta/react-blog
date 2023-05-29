import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Products } from 'pages/Products/Products';
import { NotFound } from 'pages/NotFound/NotFound';
import { GlobalStyles } from './globalStyled';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="about" end>
          About
        </NavLink>
        <NavLink to="products" end>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
