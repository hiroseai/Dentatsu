/* work
------------------------------------------ */
$('.fadeInUp').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});

/* voice
------------------------------------------ */
$('.fadeInLeft').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
      const el = document.querySelector(".voice-layer");
      const styleEl = getComputedStyle(el);
      console.log(styleEl.width);
      console.log(styleEl.height);
    }
  },
  offset: '50%',
});

$('.fadeInRight').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
      const el = document.querySelector(".voice-layer");
      const styleEl = getComputedStyle(el);
      console.log(styleEl.width);
      console.log(styleEl.height);
    }
  },
  offset: '50%',
});

