{
  const selectorYouSwitch = document.getElementById('js-btn-for-you');
  const selectorBusinessSwitch = document.getElementById('js-btn-business');
  const contentYouSwitch = document.getElementById('js-content-for-you');
  const contentBusinessSwitch = document.getElementById(
    'js-content-for-business',
  );

  if (selectorYouSwitch || selectorBusinessSwitch) {
    selectorYouSwitch.addEventListener('click', () => {
      selectorBusinessSwitch.classList.remove('active');
      selectorYouSwitch.classList.add('active');
      contentBusinessSwitch.classList.remove('active');
      contentYouSwitch.classList.add('active');
    });
    selectorBusinessSwitch.addEventListener('click', () => {
      selectorYouSwitch.classList.remove('active');
      selectorBusinessSwitch.classList.add('active');
      contentYouSwitch.classList.remove('active');
      contentBusinessSwitch.classList.add('active');
    });
  }
}
