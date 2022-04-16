export const determineButtonType = (type) =>
  type === 'submit' ? type : 'button';

export const determineButtonStyleClass = (type) => {
  switch (true) {
    case type === 'link':
      return 'button--link';
    default:
      return '';
  }
};
