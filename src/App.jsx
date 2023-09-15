import MainContent from "./components/MainContent"
import Sidebar from "./components/sidebar"
import "./styles/components/app.sass"

function App() {

  return (
    <>
      <div id="portfolio">
        <h1>Rafael Milhim</h1>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
