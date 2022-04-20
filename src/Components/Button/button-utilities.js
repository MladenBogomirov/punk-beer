export const determineButtonType = (type) =>
  type === 'submit' ? type : 'button';

export const determineButtonStyleClass = (type) => {
  switch (true) {
    case type === 'route':
      return 'button--route';
    case type === 'basic':
      return 'button--basic';
    default:
      return '';
  }
};
