import { H1, Image, Li, Slide, Span, Ul, Ol, P } from '@gregcello/revealjs-react'
import React from 'react'
import './codingStyle.css'

const WhyCodingStyle = () => {
  return (
    <>
      <Slide autoAnimate>
        <H1 itemID='header'><Span fragment fragmentIndex={0}>Why do</Span> we need Code Style<Span fragment fragmentIndex={0}>?</Span></H1>
      </Slide>
      <Slide autoAnimate>
        <H1 itemID='header'><Span>Why do</Span> we need Code Style<Span>?</Span></H1>
        <Image width='80%' src='shittyCode.png' />
      </Slide>
      <Slide autoAnimate>
        <H1 itemID='header'><Span>Why do</Span> we need Code Style<Span>?</Span></H1>
        <div className='coding-style-list-container'>
          <Ol className='coding-style-list'>
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
  )
}

const WhatCodingStyle = () => {
  return (
    <>
      <Slide>
        <H1>Code Style PEP8 - Indent & Whitespace</H1>
        <pre>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html:
`
# Use four whitespaces
def fool(*args, **kwargs):
    pass # four whitespaces
\tpass # tab
`
            }}
          />
        </pre>
      </Slide>
      <Slide>
        <H1>Code Style PEP8 - Indent & Whitespace</H1>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
# Always surround these binary operators with a single space on 
# either side:assignment (=), augmented assignment (+=, -= etc.),
# comparisons (==, <, >, !=, <>, <=, >=, in, not in, is, is not), 
# Booleans (and, or, not).
submitted += 1            # Correct
submitted +=1             # Wrong

# consider adding whitespace around the operators with the lowest
# priority(ies)
hypot2 = x*x + y*y        # Correct
hypot2 = x * x + y * y    # Wrong

              `
            }}
          />
        </pre>
      </Slide>
      <Slide>
        <H1>Code Style PEP8 - naming</H1>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
# Types and Classes naming: UpperCamelCase
class NewClass:
    def __init__(self):
        self.instance_variable = 1

# Functions and Variables naming: snake_case
variable_one = 'Hello, World!'

# Constants naming: 
I_DON_T_KNOW_HOW_TO_EXPLAIN_IT = 'example'
              `
            }}
          />
        </pre>
      </Slide>
      <Slide>
        <H1>Code Style PEP8 - Imports</H1>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
              """
              imports are always put at the top of the file, just after any 
              module comments and docstrings, and before module globals and constants.

              Imports should be grouped in the following order:
              
              Standard library imports.
              Related third party imports.
              Local application/library specific imports.
              You should put a blank line between each group of imports.
              """
              `
            }}
          />
        </pre>
      </Slide>
    </>
  )
}

const WhatHelps = () => {
  return (
    <Slide>
      <H1>pylint can be very helpful</H1>
    </Slide>
  )
}

const CodingStyle = () => {
  return (
    <>
      <WhyCodingStyle />
      <WhatCodingStyle />
      <WhatHelps />
    </>
  )
}

export default CodingStyle
