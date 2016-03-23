define('jacobheater.socialbutton.handlers', [], function () {
	var socialBtn = $('.social-buttons-container');
	var mobile = socialBtn.find('.social-button-mobile');
	var btnsContainer = socialBtn.find('.social-buttons')
	var btns = socialBtn.find('.social-button');
	//Mobile handlers
	if (mobile.length > 0) {
		mobile.click(function () {
			var $this = $(this);
			if ($this.hasClass('active')) {
				//It's open, we need to close it.
				$this.removeClass('active');
				btnsContainer.stop().fadeOut('normal', function () {
					$this.css({
						position: 'relative'
					}).stop().animate({
						bottom: 10
					}, {
						complete: function () {
							$this.css('position', 'initial');
						}
					}, 'fast');
				});
			} else {
				//It's closed, we need to open it.
				$this.addClass('active').css({
					position: 'relative'
				}).stop().animate({
					bottom: 70
				}, {
					complete: function () {
						$this.css('position', 'initial');
						btnsContainer.stop().fadeIn();
					}
				}, 'fast');
			}
		});
	}
});