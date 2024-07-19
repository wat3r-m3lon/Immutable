import "./App.css"
import Header from "./components/Header"
import MainPage from "./components/MainPage"

function App() {
  return (
    <div className="bg-[#1F0E37]">
      <Header />
      <div 
        className="gradient-bg flex flex-col items-center justify-center h-screen"
      >
        <MainPage />
      </div>
    </div>
  )
}

export default App
