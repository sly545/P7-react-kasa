import Home from "../pages/Home/Home";
import APropos from '../pages/APropos/APropos';
import Notfound from '../pages/notfound/Notfound';
import ComposantsDesktop from '../pages/Accomodation/Accomodation';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Accomodation', element: <ComposantsDesktop /> },
  { path: '/APropos', element: <APropos /> },
  { path: '*', element: <Notfound /> }
];

export default routes;   