import './App.css'
import { RevealJS, HighlightPlugin } from '@gregcello/revealjs-react'

import Welcome from './topics/welcome/welcome'
import GitSegment from './topics/git/git'
import CodingStyle from './topics/codingStyle/codingStyle'
import { useEffect } from 'react'
import CodeReview from './topics/codeReview/codeReview'

function App () {
  useEffect(() => {

  }, [])
  return (
    <div className='App'>
      <RevealJS
        width={1280}
        height={960}
        plugins={[HighlightPlugin]}
      >
        <Welcome />
        <CodingStyle />
        <GitSegment />
        <CodeReview />
      </RevealJS>
    </div>
  )
}

export default App
