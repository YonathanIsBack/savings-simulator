import {extendTheme} from "@chakra-ui/react";

const mainTheme = extendTheme({
    styles: {
        global: {
            'body': {
                backgroundColor: '#282c34'
            }
        }
    },
    components: {
        Heading: {
            baseStyle: {
                textColor: '#FFFFFF',
                opacity: 0.8
            },
            sizes: {
                xl: {
                    fontSize: '4rem',
                },
                l: {
                    fontSize: '3rem',
                }
            }
        }
    },
    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    }
})

export default mainTheme;