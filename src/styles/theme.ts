const theme = {
  // https://epicreact.dev/css-variables/
  // https://material-ui.com/customization/default-theme/
  // https://github.com/diegohaz/arc/blob/master/src-example/components/themes/default.js
  // https://blog.prototypr.io/css-variables-90cc4cdf41e9
  colors: {
    primary: {
      100: 'var(--clr-primary-100)',
      200: 'var(--clr-primary-200)',
      300: 'var(--clr-primary-300)',
      400: 'var(--clr-primary-400)',
      500: 'var(--clr-primary-500)',
      600: 'var(--clr-primary-600)',
      700: 'var(--clr-primary-700)',
      800: 'var(--clr-primary-800)',
      900: 'var(--clr-primary-900)',
    },
    gray: {
      50: 'var(--clr-gray-50)',
      100: 'var(--clr-gray-100)',
      200: 'var(--clr-gray-200)',
      300: 'var(--clr-gray-300)',
      400: 'var(--clr-gray-400)',
      500: 'var(--clr-gray-500)',
      600: 'var(--clr-gray-600)',
      700: 'var(--clr-gray-700)',
      800: 'var(--clr-gray-800)',
      900: 'var(--clr-gray-900)',
    },
    utility: {
      danger: 'var(--clr-danger)',
    },
  },
  typography: {
    /**
     * font-size: 3.625rem / 58px
     * font-weight: 600
     * line-height: 120% / 70px
     */
    hero: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-9xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 2.25rem / 36px
     * font-weight: 600
     * line-height: 120% / 43px
     */
    h1: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-5xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 2rem / 32px
     * font-weight: 600
     * line-height: 120% / 38px
     */
    h2: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-4xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.812rem / 29px
     * font-weight: 600
     * line-height: 120% / 35px
     */
    h3: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-3xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.438rem / 23px
     * font-weight: 600
     * line-height: 120% / 28px
     */
    h4: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.25rem / 20px
     * font-weight: 600
     * line-height: 120% / 24px
     */
    h5: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-lg)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1.125rem / 18px
     * font-weight: 600
     * line-height: 120% / 22px
     */
    h6: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-md)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
    /**
     * font-size: 1rem / 16px
     * font-weight: 300
     * line-height: 120% / 19px
     */
    paragraph: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-300)',
      lineHeight: '120%',
    },
    /**
     * font-size: 0.875rem / 14px
     * font-weight: 300
     * line-height: 120% / 17px
     */
    smallParagraph: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-300)',
      lineHeight: '120%',
    },
    /**
     * font-size: 0.812 / 13px
     * font-weight: 600
     * line-height: 120% / 16px
     */
    link: {
      fontFamily: 'Test Soehne, sans-serif',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-600)',
      lineHeight: '120%',
    },
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1220px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  /** 320px */
  mobileS: `(min-width: ${size.mobileS})`,
  /** 375px */
  mobileM: `(min-width: ${size.mobileM})`,
  /** 425px */
  mobileL: `(min-width: ${size.mobileL})`,
  /** 768px */
  tablet: `(min-width: ${size.tablet})`,
  /** 1024px */
  laptop: `(min-width: ${size.laptop})`,
  /** 1220px */
  laptopM: `(min-width: ${size.laptopM})`,
  /** 1440px */
  laptopL: `(min-width: ${size.laptopL})`,
  /** 2560px */
  desktop: `(min-width: ${size.desktop})`,
};

export { theme, device };
