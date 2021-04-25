import { H1, Slide } from '@gregcello/revealjs-react'
import React from 'react'

const GitSegment = () => {
  return (
    <>
      <Slide>
        <H1>Easy git</H1>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
              # get latest code
              git pull
              # create a new branch and start working on it
              git checkout -b [BranchName]
              # save all changes
              git add .
              # commit your codes
              git commit -m "commit message"
              # push it to the server
              git push
              `
            }}
          />
        </pre>
      </Slide>
    </>
  )
}

export default GitSegment
