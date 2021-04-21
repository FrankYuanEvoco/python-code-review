import { H1, Image, Li, Slide, Span, Ul, Ol } from '@gregcello/revealjs-react'
import React from 'react'
import './codingStyle.css'



const WhyCodingStyle = () => {
  return <>
    <Slide autoAnimate>
      <H1 itemID="header"><Span fragment fragmentIndex={0}>Why do</Span> we need Code Style<Span fragment fragmentIndex={0}>?</Span></H1>
    </Slide>
    <Slide autoAnimate>
      <H1 itemID="header"><Span>Why do</Span> we need Code Style<Span >?</Span></H1>
      <Image width='80%' src='shittyCode.png'></Image>
    </Slide>
    <Slide autoAnimate>
      <H1 itemID="header"><Span>Why do</Span> we need Code Style<Span >?</Span></H1>
      <div className='coding-style-list-container'>
        <Ol className="coding-style-list">
          <Li>
            <a href='https://paperswithcode.com/'>https://paperswithcode.com/</a> and <a href='https://paperswithoutcode.com/'>https://paperswithoutcode.com/</a>
          </Li>
          <Li>
            much easier debuging
          </Li>
        </Ol>
      </div>
    </Slide>
  </>
}

const WhatCodingStyle = () => {
  return <>
    <Slide>
      <H1>Code Style PEP8 - Indent and Align</H1>
      <pre><code className='coding-style-code' data-trim data-noescape data-line-numbers
        dangerouslySetInnerHTML={{__html: 
`foo = long_function_name(var_one, var_two,
                         var_three, var_four)
print('hello world')`}}
      >
      </code></pre>
    </Slide>
  </>
}

const CodingStyle = () => {
  return <>
    <WhyCodingStyle />
    <WhatCodingStyle />
  </>
}

export default CodingStyle
