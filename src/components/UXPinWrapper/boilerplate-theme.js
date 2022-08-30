// const boilerplateTheme = {
//   // To further customize this theme,
//   // please see the full theme object here: https://mui.com/customization/default-theme/
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#000000",
  //     light: "#42a5f5",
  //     dark: "#1565c0",
  //     contrastText: "#ffffff"
  //   },
  //   secondary: {
  //     main: "#9c27b0",
  //     light: "#ba68c8",
  //     dark: "#7b1fa2",
  //     contrastText: "#ffffff"
  //   },
  // },
// };

// export default boilerplateTheme;

import { Bloodtype, MarginOutlined, NoEncryption } from "@mui/icons-material";
import { Typography } from "@mui/material/Typography";
import { margin } from "@mui/system";

const boilerplateTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#6e1a6a",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#ffffff"
    },
  },
  typography: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 15,
    h1: {
      fontWeight: "600",
      fontSize: "64px",
      lineHeight: "77px"
    },
    h2: {
      fontWeight: "700",
      fontSize: "44px",
      lineHeight: "56px"
    },
    h3: {
      fontWeight: "500",
      fontSize: "44px",
      lineHeight: "56px"
    },
    body1: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    button: {
      textTransform: "inherit",
      fontWeight: "700",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      variants: [
        {
          props: { variant: 'ghost' },
          style: {
            backgroundColor: "#5ebf9926",
            color: "#5ebf99",
            fontWeight: "bold",
            borderRadius: 0,
            height: "36px"
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '2px solid'
          }
      },
      ],
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 28,
        },
        text: {
          fontWeight: "500",
        },
        sizeLarge: {
          fontSize: 18,
          height: 54,
        }
      },
    },
   
    MuiFab: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid',
            backgroundColor: "transparent",
            color: "#9c27b0",
          }
      },
      {
        props: { variant: 'nonOutlined' },
        style: {
          backgroundColor: "transparent",
          color: "#9c27b0",
        }
    },
      ],
      styleOverrides: {
        // Name of the slot
        root: {
          '& label': {
            marginTop: "100px",
           
            position:"absolute"
          },
          '& .material-icons': {
            marginRight: "0px",
          },

        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid',
            backgroundColor: "transparent",
          }
      },
      {
        props: { variant: 'nonOutlined' },
        style: {
          backgroundColor: "transparent",
        }
    },
      ],
    },

    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 36,
        },
      },
    },

    MuiChip: {
      variants: [
      {
        props: { size: 'large' },
        style: {
          backgroundColor: "transparent",
          width: '78px',
          height: '58px',
          fontSize: '20px',
          fontWeight: 'bold',
          borderRadius: 29,

        }
      },
      ],
    },
    MuiIcon: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid',
            borderRadius: '50%',
          }
      },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 28,
          }, 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 20,
          border: '1px solid',
          color: '#bdbdbd',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderBottom: '2px solid #d4d0c5',
          borderRadius: '0 !important',
          backgroundColor: 'transparent',
          color: '#505e71',
          boxShadow:'none',
          paddingBottom: '20px',
          '& .MuiTypography-root': {
            fontSize: '20px',
            fontWeight: 'bold',
          }, 
          '& .MuiAccordionSummary-expandIconWrapper': {
            border: '2px solid #6e1a6a',
            color: '#6e1a6a',
            borderRadius: '50%',
          },
        },
      },
    },
   
   
   


    // MuiSwitch: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       width: 42,
    //       height: 26,
    //       padding: 0,
    //       '& .MuiSwitch-switchBase': {
    //         padding: 0,
    //         margin: 2,
    //         transitionDuration: '300ms',
    //         '&.Mui-checked': {
    //           transform: 'translateX(16px)',
    //           '& + .MuiSwitch-track': {
    //             border: 0,
    //           },
    //           '&.Mui-disabled + .MuiSwitch-track': {
    //             opacity: 0.5,
    //           },
    //         },
    //         '&.Mui-focusVisible .MuiSwitch-thumb': {
    //           color: '#33cf4d',
    //           border: '6px solid #fff',
    //         },
    //         '&.Mui-disabled .MuiSwitch-thumb': {
    //           color: "#eeeeee",
    //         },
    //         '&.Mui-disabled + .MuiSwitch-track': {
    //           opacity: 0.7
    //         },
    //       },
    //       '& .MuiSwitch-thumb': {
    //         boxSizing: 'border-box',
    //         width: 22,
    //         height: 22,
    //       },
    //       '& .MuiSwitch-track': {
    //         borderRadius: 26 / 2,
    //         backgroundColor: '#E9E9EA',
    //         opacity: 1,
    //       },
    //     },
    //   },
    // },
    // MuiToolbar: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       borderRadius: 6,
    //       "& .MuiButton-text:hover": { "background-color": "#ffffff20" }
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#ffffff',
    //     },
    //     input: {
    //       // textAlign: "center"
    //     },
    //   }
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       color: '#dddddd',
    //     }
    //   }
    // },
    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     label: {
    //       color: '#10313e',
    //       fontSize: '14px'
    //     }
    //   }
    // },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "14px",
    //       color: "#11313E",
    //       lineHeight: "2em"
    //     }
    //   }
    // },
    // MuiSlider: {
    //   styleOverrides: {
    //     thumb: {
    //       width: "36px",
    //       height: "36px"
    //     }
    //   }
    // },
  },
};

export default boilerplateTheme;

