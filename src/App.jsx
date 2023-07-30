
import GridDropDown from './component/react-dropdown';
import ReactLayoutGrid from './component/react-grid';
import countryJSON from './assets/JSON/country.json';
import './App.css';

function App() {
  return (
    <>
     <div>
        <ReactLayoutGrid />
      </div>
      <GridDropDown data={countryJSON || []} />
    </>
  )
}

export default App
