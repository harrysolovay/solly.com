import './styles/reset.css'
import './styles/style.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Link = (props) => (
  <a
    className='link'
    href={ props.href }
  >
    <span
      className='text'
    >
      { props.text }
    </span>
  </a>
)

const Links = () => (
  <div id='links'>
    {
      [
        { href : 'https://www.facebook.com/sarahsolovaymusic/', text : 'Facebook' },
        { href : 'https://www.instagram.com/thingssollysees/', text : 'Instagram' },
        { href : 'https://soundcloud.com/user-930451114', text : 'SoundCloud' },
        { href : 'https://twitter.com/thingssollysays', text : 'Twitter' },
        { href : 'https://itunes.apple.com/us/artist/sarah-solovay/297480112', text : 'Apple Music' },
        { href : 'https://open.spotify.com/artist/5tylcLBdFfLtaA0AvpJTQB', text : 'Spotify' },
        { href : 'http://sarahsolovay.us14.list-manage.com/subscribe?u=b55df93189fddfea6cab47ef2&id=83d85f6975', text : 'Newsletter' }
      ].map((link, i) => {
        return (
          <Link
            { ...link }
            key={ i }
          />
        )
      })
    }
  </div>
)

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='background'></div>
        <Links />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
