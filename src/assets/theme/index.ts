const theme = {
  color: {
    mainHeaderBg: '#242424',
    // subHeaderBg: '#c20c0c',
    // subHeaderActivate: '#9b0909',
    // sectionHeaderDivider: '#c10d0c',
    // background: '#f5f5f5',
    text: '#333',
    subHeaderBg: '#f7e948',
    subHeaderActivate: '#ffb700',
    sectionHeaderDivider: '#ffdd00',
    background: '#242424',
  },
  size: {},
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
    `,
    textNoWrap: `
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
  },
};

export default theme;
