import { css } from 'styled-components'
const ResponsiveSetup = (props) => {
    return css`
    @media all and (max-width:600px){
        ${props}
    }
    `;
}

export default ResponsiveSetup
