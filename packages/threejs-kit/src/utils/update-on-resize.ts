export function updateOnResize(callback: () => void) {
  const resize = () => {
    callback();
  };

  window.addEventListener('resize', resize, false);
}