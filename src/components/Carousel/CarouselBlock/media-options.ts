export const bigCarouselOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "20px",
  interval: 7000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 5,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    1920: { gap: "15px" },
    1775: { perPage: 4 },
    1300: { perPage: 3 },
    720: { perPage: 2 },
  },
};

export const smallCarouselOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "20px",
  interval: 7000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 9,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    // 4500: {autoWidth: true},
    1920: { perPage: 8 },
    // 1712: {perPage: 8},
    1580: { perPage: 7 },
    1428: { perPage: 6 },
    1220: { perPage: 5 },
    1070: { perPage: 4 },
    820: { perPage: 3 },
  },
};

export const smallLimitedCarouseIOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "27px",
  interval: 5000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 6,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    // 4500: {autoWidth: true},
    // 1920: {perPage: 6},
    // 1712: {perPage: 8},
    1630: { perPage: 5, gap: "25px" },
    1500: { perPage: 7 },
    1340: { perPage: 6 },
    1160: { perPage: 5 },
    950: { perPage: 4 },
  },
};


