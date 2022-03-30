const Constant = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  REGEX: {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    SPECIALCHARACTERS: /[!@#\$%\^\&*\)\(+=._-]/g,
    NUMBER: /[0-9]/g,
    NAME: /^[a-zA-Z\s\u00C0-\u00FF]*$/,
    ALPHABETCOMMA: /^[ a-zA-Z0-9\.]+$/i,
    ALPHANUMERIC: /^[a-zA-Z0-9\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]+$/i,
    LOWERCASEUPPERCASE: /[a-z].*[A-Z]|[A-Z].*[a-z]/,// eslint-disable-next-line
    NUMERIC: /^\d*\.?\d*$/,
    NUMONLY: /^\d*$/,
    URL: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    ASCII: 'xxx[\x00-\x7F]+xxx',
  },
  IMAGESURL: {
    LOGO: 'https://res.cloudinary.com/zudu/image/upload/v1648116642/NXT-Boardroom/Project-Images/logo.svg'
  },
};
export default Constant;
