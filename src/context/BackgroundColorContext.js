import React from 'react'

const BackgroundColorContext = React.createContext({
  mode: true,
  changeBackgroundColor: () => {},
  savedList: [],
})

export default BackgroundColorContext
