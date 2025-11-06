"use client"

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
 globalCss: {
  html: {
    scrollBehavior: "smooth",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none", 
  },

  body: {
    bg: "#F3F3F7",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",

   
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },


  "&::-webkit-scrollbar": {
    display: "none",
  },
},

  theme: {
    tokens: {
      colors: {
        purple: { 500: { value: "#5F00D9" } },
        p: {
          purple: { value: "#5F00D9" },
          black: { value: "#171717" },
        },
        black: {
          5: { value: "#F3F3F7" },
          10: { value: "#EEEEF4" },
          20: { value: "#D8DDE2" },
          40: { value: "#BABAC4" },
          60: { value: "#797E82" },
          80: { value: "#535D66" },
        },
      },

      fonts: {
        heading: { value: "Ubuntu" },
        body: { value: "Ubuntu" },
      },

      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        base: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "22px" },
        "3xl": { value: "24px" },
        "4xl": { value: "30px" },
      },
    },

    textStyles: {
      h1: {
        description: "Heading 1",
        value: {
          fontSize: { base: "30px", md: "32px" },
          color: "p.black",
          lineHeight: { base: "34px", md: "36px" },
        },
      },
      h2: {
        description: "Heading 2",
        value: {
          fontSize: { base: "24px", md: "28px" },
          color: "p.black",
          lineHeight: { base: "28px", md: "32px" },
        },
      },
      h3: {
        description: "Heading 3",
        value: {
          fontSize: { base: "22px", md: "24px", xl: "32px" },
          color: "p.black",
          lineHeight: { base: "26px", md: "28px", xl: "36px" },
        },
      },
      h4: {
        description: "Heading 4",
        value: {
          fontSize: { base: "20px", md: "22px" },
          color: "p.black",
          lineHeight: { base: "24px", md: "26px" },
        },
      },
      h5: {
        description: "Heading 5",
        value: {
          fontSize: { base: "18px", md: "20px" },
          color: "p.black",
          lineHeight: { base: "22px", md: "24px" },
        },
      },
      h6: {
        description: "Heading 6",
        value: {
          fontSize: { base: "16px", md: "18px" },
          color: "p.black",
          lineHeight: { base: "20px", md: "22px" },
        },
      },
    },

    semanticTokens: {
      components: {
        Button: {
          baseStyle: {
            value: {
              fontWeight: "bold",
              borderRadius: "10px",
            },
          },
        },
        FormLabel: {
          baseStyle: {
            value: {
              fontSize: "sm",
            },
          },
        },
        Input: {
          variants: {
            outline: {
              field: {
                value: {
                  h: "38px",
                  borderRadius: "8px",
                  fontSize: "sm",
                  pb: "0",
                  _focus: {
                    boxShadow: "0 0 0 1px #5F00D9",
                  },
                },
              },
            },
          },
        },
        Textarea: {
          variants: {
            outline: {
              value: {
                h: "38px",
                borderRadius: "8px",
                fontSize: "sm",
                _focus: {
                  boxShadow: "0 0 0 1px #5F00D9",
                },
              },
            },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
