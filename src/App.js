import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';

function App() {
  return (<>
      <div className="main">
       <div className="tech_news">
       <h1>TECH NEWS</h1>
       <Search></Search>
       <Pagination></Pagination>
        <Stories></Stories>
  

       </div>

      </div>
  </>);
  
}

export default App;
