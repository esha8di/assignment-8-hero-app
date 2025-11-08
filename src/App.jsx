

import { useLoaderData } from 'react-router'
import './App.css'
import Topapp from './pages/Topapp/Topapp'

function App() {
  const datas=useLoaderData()
  // console.log(datas)
  

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2 p-2">
    {
      datas.map(app=><Topapp app={app}></Topapp>)
    }

    </div>
    
    
       
    </>
  )
}

export default App
