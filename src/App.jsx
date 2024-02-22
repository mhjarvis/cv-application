import './App.css'
import PersonalInformation from './components/PersonalInformation'
import Resume from './components/Resume'

function App() {

  return (
    <div className='app-container'>
      <div className='input-section'>
        <PersonalInformation />
      </div>
      <div className='resume-section'>
        <Resume />
      </div>
    </div>
  )
}

export default App
