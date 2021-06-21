import React from 'react'

export const config = {
  unstable_runtimeJS: false
}

export default function Support() {
  return (
    <div className="app sans-serif">
      <div className="splash flex flex-grow flex-col justify-center items-center">
        <div className="flex-col justify-center items-center text-center">
          <div className="flex-row justify-center items-center text-center">
            <a href="/">
              <img
                className="m-auto"
                style={{ height: 140 }}
                src={'assets/icon_app_white.png'} />
            </a>
          </div>
          <div className="pt-8">
            <span className="text-4xl">
              need help?
            </span>
          </div>
          <div className="flex flex-row pt-8">
            <div className="px-2">
              <a
                href="mailto:support@syphon.org?subject=Syphon%20Support&body=Leave%20your%20feedback%20or%20question%20here"
                className="text-2xl mx-2"
                style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>email us</a>
            </div>
            <div className="px-2">
              <a
                href="https://matrix.to/#/#syphon:matrix.org"
                className="text-2xl mx-2"
                style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>join the Syphon chat</a>
            </div>
            <div className="px-2">
              <a
                href="https://github.com/syphon-org/syphon/issues"
                className="text-2xl mx-2"
                style={{ cursor: 'pointer', letterSpacing: '0.5', textDecorationLine: 'underline' }}>submit a bug or issue</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
