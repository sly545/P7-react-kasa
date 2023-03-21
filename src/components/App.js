// App.js
import { Routes, Route } from "react-router-dom"
import routes from './Route';



function App() {
  return (
    <div className="lien">
      <Routes>
        {/* Map des routes pour afficher toutes les pages */}
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

