import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
