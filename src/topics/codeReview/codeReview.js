import { Slide, H1, P, Image } from '@gregcello/revealjs-react'
import React from 'react'

const Intro = () => {
  return (
    <Slide>
      <H1>Code Review</H1>
      <Image src='tooLongCodeReview.jpg' />
    </Slide>
  )
}

const GithubIntro = () => {
  return (
    <>
      <Slide autoAnimate>
        <H1>Using Github - Setting up ssh</H1>
        <P>
          <a href='https://devconnected.com/how-to-setup-ssh-keys-on-github/'>This tutorial</a> is a complete tutorial for setting up git over ssh.
          If you found it difficult to connect the github's server, you can add more lines into the config file introduced in
          <a href='https://devconnected.com/how-to-setup-ssh-keys-on-github/#Configure_your_SSH_keys'> this part.</a>
        </P>
        <pre>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
              Host github.com
                Hostname github.com
                User git
                IdentityFile ~/.ssh/custom_id_rsa
                # ProxySettings:
                # if you are using mac or linux, use nc.
                # if you are using windows, plz find out
                # where your git is installed. There should
                # always be a 'connect.exe' in git's
                # installation directory. e.g. my connect.exe
                # path is C:\\Program Files\\Git\\mingw64\\bin\\connect.exe
                # my git install path is C:\\Program Files\\Git
                # E.g. mac/linux proxy command
                ProxyCommand $(which nc) -X 5 -x 127.0.0.1:1080 %h %p
                # E.g. Windows proxy command
                ProxyCommand C:\\Program Files\\Git\\mingw64\\bin\\connect.exe -S 127.0.0.1:1080 %h %p
              `
            }}
          />
        </pre>
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create new Repo</H1>
        <P>Simply create a new Repo, DO NOT FORGET MAKING IT PRIVATE</P>
        <Image src='createRepo.png' />
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create new Repo</H1>
        <P>
          copy the git repo url
        </P>
        <Image width='90%' src='brandNewRepo.png' />
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create new Repo</H1>
        <P>type the following command to upload your current code to the repository</P>
        <pre>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
              cd [your_project_directory]
              git init
              git remote add origin [your_git_repo_url]
              git add .
              git commit -m "init commit"
              git push --set-upstream origin master
              `
            }}
          />
        </pre>
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create pull request</H1>
        <P>After you finish pulling code from github, the first thing you should do is create and checkout to your own branch</P>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
# git checkout -b [branch-name]
git checkout -b yufanDev
              `
            }}
          />
        </pre>
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create pull request</H1>
        <P>You are now working on your branch.</P>
        <P>After a bunch of works you may want to push your code to github and find someone to review your code. the first thing you should do is making a commit</P>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
# let git know all your changes
git add .
# pack all these changes into a single commit and give this commit a proper description
git commit -m "added balabala | fixed balabala | removed balabala"
              `
            }}
          />
        </pre>
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create pull request</H1>
        <P>you can now create a pull request</P><span> with github-cli</span>
        <P>I would strongly recommand learning github-cli. This will save you a lot of time.</P>
        <pre data-id='Indent'>
          <code
            className='coding-style-code'
            data-trim
            data-line-numbers
            dangerouslySetInnerHTML={{
              __html: `
# simply type this command and then follow the instructions from github-cli
gh pr create --base master
              `
            }}
          />
        </pre>
      </Slide>
      <Slide autoAnimate>
        <H1>Github - create pull request</H1>
        <P>you can now create a pull request</P><span> with website</span>
        <Image width='100%' src='createPullRequest.png' />
      </Slide>
    </>
  )
}

const CodeReview = () => {
  return (
    <>
      <Intro />
      <GithubIntro />
    </>
  )
}

export default CodeReview
