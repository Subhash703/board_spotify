import React, { useEffect, useState } from 'react'
import { Router } from 'next/router'
export default function Login() {
  const AUTH_URL =
    'https://accounts.spotify.com/authorize?client_id=c6f1dd90b3d94102b830b0f5562fbbd6&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

  const [code, setCode] = useState(undefined)
  useEffect(function onFirstMount() {
    setCode(new URLSearchParams(window.location.search).get('code'))
  })

  return (
    <div>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <a className='btn btn-success btn-lg' href={AUTH_URL}>
          Login With Spotify
        </a>
      </div>
    </div>
  )
}
