import React from 'react'
import Header from '../components/Header.jsx'
// import NavigationBar from '../components/NavigationBar.jsx'
import UserStory1TvAd from '../components/UserStory1TvAd'
import UserStory2DownloadShows from '../components/UserStory2DownloadShows.js'
import UserStory3WatchAnywhere from '../components/UserStory3WatchAnywhere.js'
import UserStory4Kids from '../components/UserStory4Kids.js'
import FAQSection from '../components/FAQSection.js'
import FooterSection from '../components/FooterSection'
const Home = () => {
  return (
    <div>
      {/* <NavigationBar/> */}
      <Header/>
      <UserStory1TvAd/> 
      <UserStory2DownloadShows/>
      <UserStory3WatchAnywhere/>
      <UserStory4Kids/>
      <FAQSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
