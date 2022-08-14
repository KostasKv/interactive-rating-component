import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Home.module.css'
import FeedbackRating from '../components/feedback-rating'
import FeedbackThankYou from '../components/feedback-thank-you'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [rating, setRating] = useState()

  function onSubmit(rating) {
    setRating(rating)
    setSubmitted(!submitted)
  }

  return ( 
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* respond responsively */}

        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon32x32.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet" /> 

        <title>Frontend Mentor | Interactive rating component</title>
      </Head>
      <main>
        <div className="flex h-screen w-screen items-center justify-center bg-very-dark-blue">
          <div className="w-[327px] h-[361px] sm:h-[416px] sm:w-[412px] bg-dark-blue p-6 rounded-2xl sm:rounded-[32px] sm:p-8">
            { submitted ? <FeedbackThankYou rating={rating} /> : <FeedbackRating onSubmit={onSubmit}/>}
          </div>
        </div>
      </main>
      <footer>
        <div className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.kostask.com">Kostas Kvietinsas</a>.
        </div>
      </footer>
    </>
  )
}