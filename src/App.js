import './App.css';
import { RevealJS } from '@gregcello/revealjs-react'
import { HighlightPlugin } from '@gregcello/revealjs-react'
import Welcome from './topics/welcome/welcome';

function App() {
  return (
    <div className="App" style={{width: '100%', height:'100vh'}}>
    {/* <div>你好！</div> */}
        <RevealJS
        // parallaxBackgroundSize='1920px 1080px'
          plugins={[ HighlightPlugin ]}
          >
          <Welcome />
        </RevealJS>
    </div>
  );
}

export default App;
