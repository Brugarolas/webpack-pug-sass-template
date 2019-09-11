const initImageBackground = (selector = '.image-background') => {
  const transformDataImage = (element) => {
    if (element.style.backgroundImage) {
      return;
    }

    const image = element.getAttribute('data-image');

    element.style.backgroundImage = `url("${image}")`;
  };

  document.querySelectorAll(selector).forEach(transformDataImage);
};

export default initImageBackground;
