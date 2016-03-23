define('jacobheater.angular.directive.slideshow', ['jacobheater.angular'], function (app) {
    var dir = app.directive('ngSlider', function () {
        return {
            restrict: 'EA',
            scope: {
                items: '='
            },
            templateUrl: '../Templates/ngSlider/ngSlider.html',
            controller: function ($scope) {

            },
            link: function (scope, element, attributes, ctrl) {
                require(['pro', 'pro.collections'], function (pro, collections) {
                    var $elem = $(element[0]);
                    var $sliderParent = $elem.find('.ng-slider-container');
                    var $slidesContainer = $elem.find('.ng-slides');
                    var $slideTrackerContainer = $elem.find('.ng-slider-trackers');
                    var buildTracker = function (item, idx) {
                        var tracker = $('<div class="ng-slider-tracker"></div>');
                        var content = $('<div class="ng-slider-tracker-content"><div>')
                        tracker.append(content);
                        tracker.data('element', {
                            item: item,
                            index: idx
                        });
                        return tracker;
                    };
                    var buildSlider = function (items) {
                        if ($sliderParent.attr('ready') !== 'true') {
                            var enumerable = collections.asEnumerable(items);
                            var $items = enumerable.select(function (item) {
                                var idx = enumerable.indexOf(item);
                                var container = $(pro.stringFormatter('<div class="ng-slide" idx="{0}"></div>', idx));
                                var content = $(pro.stringFormatter('<div class="ng-slide-content"></div>'));
                                //Work on content
                                if (item.content) {
                                    content.append(item.content);
                                }
                                container.append(content);
                                //Work on title
                                if (item.title) {
                                    var title = $(pro.stringFormatter('<div class="ng-slide-title"><span>{0}</span></div>', item.title));
                                    container.append(title);
                                }
                                return container;
                            });
                            $items.forEach(function (i, o) {
                                $slidesContainer.append(o.hide());
                                var tracker = buildTracker(o, i);
                                $slideTrackerContainer.append(tracker);
                            });
                            $sliderParent.attr('ready', 'true');
                        }
                    };
                    buildSlider(scope.items);
                    scope.$watch('items', function (items) {
                        buildSlider(items);
                    });
                    initSliderHandlers($elem, $slidesContainer, $slideTrackerContainer);
                    finalize($elem, $slidesContainer, $slideTrackerContainer);
                });
            }
        };
    });
    function initSliderHandlers(slider, slides, trackers) {
        var $each = trackers.find('.ng-slider-tracker').click(function () {
            var $this = $(this);
            var data = $this.data('element');
            if (!data.item.is(':visible')) {
                var activeSlide = slides.find('.ng-slide:visible');
                activeSlide.fadeOut('fast', function () {
                    $each.removeClass('ng-slider-tracker-active');
                    $this.addClass('ng-slider-tracker-active');
                    data.item.fadeIn('fast');
                });
            }
        });
    }
    function finalize(slider, slides, trackers) {
        slides.find('.ng-slide').eq(0).fadeIn('slow');
        trackers.find('.ng-slider-tracker').eq(0).addClass('ng-slider-tracker-active');
    }
    return dir;
});