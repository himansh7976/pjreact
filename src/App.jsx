
import Countercont from './Components/Countercont'
import Counterdis from './Components/Counterdis'
import { CounterProvider } from './Context/CounterContext'




function App() {


  return (

    <CounterProvider>

      <div>

        <Counterdis></Counterdis>
        <Countercont></Countercont>
      </div>

    </CounterProvider>





  )
}

export default App
