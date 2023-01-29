export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 640) {
    console.log("outside of sidebar reached")
    return { right: !menuOpened && "-100%" };
  }
};
