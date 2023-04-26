// App.js
import { Routes, Route } from "react-router-dom"
import routes from './Route';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"




function App() {
  
  return (
    <div className="lien">
    <Navbar/>
      <Routes>
        {/* Map des routes pour afficher toutes les pages */}
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;