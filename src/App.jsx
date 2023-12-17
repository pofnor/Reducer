import { Route, Routes } from 'react-router-dom'
import Reducer from './Reducer'
import NoReducer from './NoReducer/NoReducer'

function App () {
  return (        
    <Routes>      
      <Route
        key={"reducer"}
        path={'/'}
        element={<Reducer/>}
      />
      <Route
        key={"Noreducer"}
        path={'/noreducer'}
        element={<NoReducer/>}
      />            
    </Routes>    
  )
}

export default App
