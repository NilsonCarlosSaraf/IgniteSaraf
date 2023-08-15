import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post author=" Diego Fernandes" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magni perspiciatis laudantium cumque id atque similique consectetur nam distinctio recusandae aliquid, vero architecto quis dolorum aspernatur dolor in soluta pariatur." />
    </div>

  )
}


