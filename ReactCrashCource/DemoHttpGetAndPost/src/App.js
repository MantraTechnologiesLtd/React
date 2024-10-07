import './App.css';
import {PostList} from  './Components/PostList'
import {PostForm} from  './Components/PostForm'
function App() {
  return (
    <div className="App">
      <div>
        <PostForm/>
        <PostList/>
      </div>
    </div>
  );
}

export default App;