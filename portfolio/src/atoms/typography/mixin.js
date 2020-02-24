import styled from 'styled-components'
import theme from 'styled-theming'
// import color from '../colors/mixin'
import '../../fonts/Akronim-Regular.ttf'


export const fontSize = theme.variants('mode',
'font-size', {
    xsmall: { light: 'font-size:0.5rem', dark: 'font-size:0.5rem' },
    small: { light: 'font-size:0.8rem', dark: 'font-size:0.8rem' },
    medium: { light: 'font-size:1rem', dark: 'font-size:1rem' },
    large: { light: 'font-size:4rem', dark: 'font-size:1.2rem' },
    xlarge: { light: 'font-size:1.5rem', dark: 'font-size:1.5rem' },
});

export const fontWeight = theme.variants('mode',
'font-weight', {
    lighter: { light: 'font-weight:100', dark: 'font-weight:100'},
    light: { light: 'font-weight:400', dark: 'font-weight:400' },
    bold: { light: 'font-weight:500', dark: 'font-weight:500' },
    bolder: { light: 'font-weight:700', dark: 'font-weight:700' }
})

export const fontFamily = theme.variants('mode',
'font-family', {
    primary: { light: 'Akronim', dark: 'Akronim'},
    secondary: { light: 'Pacifico', dark: 'Pacifico',}
})

export const letterSpacing = theme.variants('mode', 
'letter-spacing', {
    tight: { light: '0.9', dark: '0.9' },
    moderate: { light: '1.15', dark: '1.15' },
    loose: { light: '1.5', dark: '1.5' }
})


