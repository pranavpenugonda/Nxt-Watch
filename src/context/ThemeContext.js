import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTabItem: 'Home',
  savedVideos: [],
  addVideo: () => {},
  toggleTheme: () => {},
  updateActiveTabItem: () => {},
})

export default ThemeContext
