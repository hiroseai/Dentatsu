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
    }
  },
  offset: '50%',
});

$('.fadeInRight').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '50%',
});

