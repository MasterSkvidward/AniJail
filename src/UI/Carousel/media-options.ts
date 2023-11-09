import { freemem } from "os";

export const bigCarouselOptions = {
   speed: 900,
   // height : '275px',
   rewind: true,
   gap: "20px",
   interval: 9000,
   autoplay: true,
   lazyLoad: "nearby",
   perPage: 5,
   // fixedWidth: 190,
   arrows: true,
   // arrowPath: arrowRight,
   pagination: true,

   breakpoints: {
      1920: { gap: "15px" },
      1775: { perPage: 4 },
      1300: { perPage: 3 },
      720: { perPage: 2 },
   },
};

export const smallCarouselOptions = {
   speed: 700,
   // height : '275px',
   rewind: true,
   gap: "20px",
   interval: 7000,
   autoplay: true,
   lazyLoad: "nearby",
   perPage: 10,
   // fixedWidth: 190,
   arrows: true,
   pagination: false,
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
   speed: 700,
   // height : '275px',
   rewind: true,
   gap: "27px",
   interval: 10000,
   autoplay: true,
   lazyLoad: "nearby",
   perPage: 8,
   // fixedWidth: 190,
   arrows: true,
   pagination: false,

   drag: true,
   autoWidth: false,
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

export const charactersCarouseIOptions = {
   speed: 900,
   rewind: true,
   drag: true,
   gap: "22px",
   interval: 9000,
   autoplay: true,
   lazyLoad: "nearby",
   //   perPage: 7,
   // fixedWidth: "121px",
   // fixedWidth: 190,
   arrows: true,
   pagination: false,
   // arrowPath: arrowRight,

   //   breakpoints: {
   //     1500: { perPage: 8 },
   //     1180: { perPage: 7 },
   //     950: { perPage: 6 },
   //     500: { perPage: 4 },
   //   },
};

export const personCarouseIOptionsLimited = {
   speed: 900,
   // height : '275px',
   rewind: true,
   gap: "15px",
   interval: 9000,
   autoplay: true,
   lazyLoad: "nearby",
   perPage: 7,
   // fixedWidth: 190,
   arrows: true,
   pagination: false,
   // arrowPath: arrowRight,

   breakpoints: {
      1500: { perPage: 8 },
      1180: { perPage: 7 },
      950: { perPage: 6 },
      500: { perPage: 4 },
   },
};

export const friendCarouseIOptionsLimited = {
   speed: 900,
   // height : '275px',
   rewind: true,
   gap: "15px",
   interval: 9000,
   autoplay: true,
   lazyLoad: "nearby",
   perPage: 6,
   // fixedWidth: 190,
   arrows: true,
   pagination: false,
   // arrowPath: arrowRight,

   breakpoints: {
      1500: { perPage: 5 },
      1180: { perPage: 5 },
      950: { perPage: 4 },
      500: { perPage: 4 },
   },
};

export const reviewsCarouselOptions = {
   speed: 1100,
   // type: "loop",
   rewind: true,
   gap: "35px",
   interval: 11000,
   autoplay: false,
   lazyLoad: "nearby",
   perPage: 3,
   arrows: true,
   pagination: true,
   // drag: "free",

   breakpoints: {
      1500: { perPage: 2 },
      1180: { perPage: 2 },
      950: { perPage: 2 },
      500: { perPage: 2 },
   },
};

export const limitedOptions = {
   drag: false,
   arrows: false,
   autoWidth: true,
};
