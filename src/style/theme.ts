 import { extendTheme } from '@chakra-ui/react'

 export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.50',
        backgroundColor: 'gray.900',
        fontFamily: 'Source Sans Pro'
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'white',
        fontFamily: 'Source Sans Pro',
      },
      'button, input, select, textarea': {
        fontFamily: 'Source Sans Pro'
      },
      'button': {
        backgroundColor: '#FF5151',
        color: 'white'
      }
    },
  },
})
