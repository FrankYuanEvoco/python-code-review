import './App.css';
import { RevealJS } from '@gregcello/revealjs-react'
import { HighlightPlugin } from '@gregcello/revealjs-react'
import Welcome from './topics/welcome/welcome';
import GitSegment from './topics/git/git';
import CodingStyle from './topics/codingStyle/codingStyle';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

  }, [])
  return (
    <div className="App" >
    {/* <div>你好！</div> */}
        <RevealJS
          width={960}
          height={720}
          
          plugins={[ HighlightPlugin ]}
          >
          <Welcome />
          <CodingStyle />
          <GitSegment />
        </RevealJS>
    </div>
  );
}

export default App;
