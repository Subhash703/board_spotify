import React from 'react'
// import '../../styles/global.css'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
      <nav className='sidebar'>
        <div className='logo'>
          <Link href='./index.html'>
            <img src='./board-infinity.png' alt='Logo' />
          </Link>
        </div>
        <ul className='nav-links'>
          <li>
            <Link href='/a'>
              <span>
                <i className='fas fa-home'></i>Home
              </span>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <span>
                <i className='fas fa-search'></i> Search
              </span>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <span>
                <i className='fas fa-grip-lines-vertical'></i> Your Library
              </span>
            </Link>
          </li>
          <br />
          <p>Playlists</p>
          <li>
            <ul className='playlist'>
              <li id='create-playlist'>
                <Link href='/'>
                  <span>
                    <i className='fas fa-plus-square'></i> Create Playlist
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <ul className='nav-links' id='allplaylists'>
              <li>
                <a href='./liked_songs.html'>
                  <Link href='/'>
                    <span>
                      <i className='fas fa-heart'></i> Liked Songs
                    </span>
                  </Link>
                </a>
              </li>
              <li>
                <i className='fas fa-bed'></i> Sleepy Piano
              </li>
              <li>
                <i className='fas fa-code'></i>Coding Smooth
              </li>
              <li>
                <i className='fas fa-laptop'></i> Programming Music
              </li>
            </ul>
          </li>
          <li>
            <i className='fas fa-download'></i> Install App
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
