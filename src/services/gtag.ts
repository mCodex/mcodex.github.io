export const GA_TRACKING_ID = 'UA-79205996-1';

const { gtag } = window;

export const pageview = (url: string): void => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// export const event = ({ action, category, label, value }: any): void => {
//   gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value,
//   });
// };
