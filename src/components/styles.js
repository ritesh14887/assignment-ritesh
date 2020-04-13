import palette from '../theme/palette';

export const appStyles = {
  '@font-face': [{
    fontFamily: 'PatrickHand',
    src: 'url(/fonts/PatrickHand-Regular.ttf)',
  },
  {
    fontFamily: 'Giffy',
    src: 'url(/fonts/Griffy-Regular.ttf)',
  }],
  wrapper: {
    fontFamily: 'PatrickHand',
    background: palette.primary.black,
    margin: '0 auto',
    display: 'flex',
    padding: '20px 100px',


  },
  filterContainer: {
    flex: '1 1 25%',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    overflow: 'hidden',
    backgroundColor: palette.primary.black,
    color: palette.primary.white,
    '&.no-filter': {
      '& .category-box': {
        display: 'none',
      },
    },
  },
  charcterContainer: {
    flex: '1 1 75%',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    marginLeft: '10px',
    backgroundColor: palette.primary.black,
    overflow: 'hidden',
  },
  charcterList: {
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 5px 0 5px',
    color: palette.primary.white,
  },
  '@media (max-width: 767px)': {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },
  '@media (max-width: 1023px)': {
    wrapper: {
      display: 'flex',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },

};

export const charcterStyles = {
  charcter: {
    width: 'calc(25% - 20px)',
    border: 'solid 1px #0057ff57',
    boxShadow: '0 0 15px 0px #3955ffa1',
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: palette.primary.charcoal,
    '& .image-box': {
      borderBottom: `'solid 1px' ${palette.primary.silver}`,
      position: 'relative',
      marginBottom: '10px',
      minHeight: '200px',
      '& .character-pic': {
        width: '100%',
        display: 'block',
      },
      '& .details-overlay': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '0 10px',
        '& .name': {
          color: palette.primary.white,
          margin: '10px 0 0 0',
          fontSize: '16px',
        },
        '& .id': {
          color: palette.primary.white,
          margin: '10px 0 10px 0',
          fontSize: '12px',
        },
      },

    },
    '& .item-detail': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 5px 4px 5px',
      borderBottom: 'solid 1px #444444',
      padding: '6px 0 6px 0',
      alignItems: 'center',
      '& .title ': {
        color: '#d1d1d1',
      },
      '& .description': {
        color: ' #e78c0c',
        fontWeight: 700,
      },

    },

  },


  '@media (max-width: 1023px)': {
    charcter: {
      width: 'calc(33% - 16px)',
      marginLeft: 10,
      marginBottom: 10,
    },
  },
  '@media (max-width: 767px)': {
    charcter: {
      width: 'calc(50% - 16px)',
      marginLeft: 10,
      marginBottom: 10,
    },
  },

};

export const filterItemStyles = {
  categoryTitle: {
    margin: '0',
  },
  categoryBox: {
    borderBottom: '1px solid palette.primary.lightGrey',
    margin: '15px 30px',
    '&:last-child': {
      borderBottom: '0',
    },
  },
  filterItem: {
    marginTop: 5,
    listStyle: 'none',
    padding: '0',
    '& input': {
      marginRight: '10px',
    },
    '& li': {
      margin: '2px 10px',
      color: palette.primary.lightGrey,
      fontSize: 20,
    },
  },

};


export const filterStyles = {
  headingBox: {
    padding: '8px 20px',
    backgroundColor: palette.primary.black,
    margin: '0 0 30px 0',
    boxShadow: `0 0 8px 0px ${palette.primary.grey}`,
    display: 'flex',
    color: palette.primary.white,

    '& .sub-heading': {
      color: ' palette.primary.white',
      flex: '1',
      margin: '0',
    },

  },
  hamburgerItem: {
    display: 'none',
  },
  '@media (max-width: 767px)': {
    headingBox: {
      margin: '0',
    },
    hamburgerItem: {
      display: 'block',
      height: 3,
      width: 25,
      position: 'relative',
      marginTop: 14,
      backgroundColor: palette.primary.white,
      borderRadius: 0,
      '&:before': {
        display: 'block',
        position: 'absolute',
        width: 25,
        height: 3,
        backgroundColor: palette.primary.white,
        left: 0,
        content: '""',
        transform: 'rotate(0)',
        borderRadius: 0,
        top: '-11px',
        transformOrigin: '1px 1px',
      },
      '&:after': {
        display: 'block',
        position: 'absolute',
        width: 25,
        height: 3,
        backgroundColor: palette.primary.white,
        left: 0,
        content: '""',
        transform: 'rotate(0)',
        borderRadius: 0,
        bottom: '-11px',
        transformOrigin: '1px 1px',
      },
    },
  },
  '@media (max-width: 1023px)': {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 10px',
    },
    charcterContainer: {
      margin: 0,
    },
  },
};

export const headerStyles = {
  bannerImage: {
    width: '100%',
    fontFamily: 'Giffy',
    padding: '30px 0 0 0',
    fontSize: 60,
    margin: 0,
    textAlign: 'center',
    color: palette.primary.white,
    backgroundColor: palette.primary.black,
  },
  '@media (max-width: 767px)': {
    bannerImage: {
      fontSize: 30,
      padding: '10px 0 0 0',
    },
  },
  '@media (max-width: 1023px)': {
    bannerImage: {
      fontSize: 30,
      padding: '10px 0 0 0',
    },
  },

};

export const paginationStyle = {
  pagination: {
    margin: 10,
    '& .page-link': {
      color: '#FFFFFF',
      border: '1px solid #FFFFFF',
      margin: 5,
      padding: 5,
      borderRadius: 3,
      textDecoration: 'none',
      background: 'transparent',
    },
  },
};

export const searchPanelStyles = {
  searchPanel: {
    display: 'flex',
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontFamily: 'PatrickHand',
    '& .search-box': {
      display: 'flex',
      '& input': {
        display: 'flex',
        height: 28,
        width: 200,
        fontFamily: 'PatrickHand',
        fontSize: 16,
        paddingLeft: 10,

      },
      '& button': {
        backgroundColor: palette.primary.blue,
        color: palette.primary.white,
        width: 80,
        fontFamily: 'PatrickHand',
        fontSize: 18,
      },

    },
    '& .sort-box': {
      backgroundColor: palette.primary.white,
      '& select': {
        flex: 1,
        width: 130,
        height: 34,
      },
    },
  },
};
