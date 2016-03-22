define('jacobheater.angular.directive.menu', ['jacobheater.angular'], function (app) {
    app.directive('superMenu', function () {
        return {
            restrict: 'EA',
            scope: {
                items: '=',
                menuSpeed: '=',
                buttonSpeed: '='
            },
            templateUrl: '../Templates/SuperMenu/superMenu.html',
            controller: function ($scope) {

            },
            link: function (scope, element, attributes, ctrl) {
                require(['pro', 'pro.collections'], function (pro, collections) {
                    var buildMenu = function (value) {
                        var e = $(element[0]);
                        if (e.attr('ready') !== 'true') {
                            var btn = $(element[0]).find('.super-menu-button-container');
                            initBtnHandler(btn, scope);
                            var itemsContainer = e.find('.super-menu-item-container');
                            if (value && pro.isArray(value)) {
                                var list = pro.collections.asEnumerable(value).where(function (item) {
                                    return pro.isObject(item);
                                }).select(function (obj) {
                                    var htmlBuilder = new pro.stringBuilder();
                                    htmlBuilder.append(pro.stringFormatter('<div class="super-menu-item{0}">', obj.isLogo === true ? " super-menu-item-logo" : ""));
                                    htmlBuilder.append(pro.stringFormatter('<a href="{0}">{1}</a>', obj.path, obj.text));
                                    htmlBuilder.append('</div>');
                                    return htmlBuilder.toString();
                                });
                                itemsContainer.append(list.join(''));
                                itemsContainer.find('.super-menu-item').click(function () { btn.click(); });
                            }
                            e.attr('ready', 'true');
                        }
                    };
                    buildMenu(scope.items);
                    scope.$watch('items', function (value) {
                        buildMenu(value);
                    });
                });
            }
        };
    });
    function initBtnHandler(btn, scope) {
        if (btn) {
            var self = $(btn.first());
            var selfStart = self.position().left;
            var degree = 180;
            var complete = 360;
            var begin = 180;
            btn.click(function () {
                var itemContainer = $(btn.first()).parent().find('.super-menu-item-container');
                var outerWidth = itemContainer.outerWidth();
                var rotationSpeed = 360 / outerWidth;
                if (itemContainer.hasClass('super-menu-item-container-open')) {
                    itemContainer.stop().animate({
                        left: '-' + outerWidth
                    }, {
                        complete: function () {
                            itemContainer.removeClass('super-menu-item-container-open');
                            self.stop().animate({
                                left: selfStart
                            }, {
                                step: function (now, fx) {
                                    degree -= now + rotationSpeed;
                                    $(this).css('transform', 'rotate(' + degree + 'deg)');
                                    $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
                                    $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
                                },
                                complete: function () {
                                    degree -= degree - begin;
                                    $(this).css('transform', 'rotate(' + degree + 'deg)');
                                    $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
                                    $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
                                }
                            }, scope.buttonSpeed || "fast");
                        }
                    }, scope.menuSpeed || "normal");
                } else {
                    self.stop().animate({
                        left: selfStart + outerWidth
                    }, {
                        step: function (now, fx) {
                            degree += now + rotationSpeed;
                            $(this).css('transform', 'rotate(' + degree + 'deg)');
                            $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
                        },
                        complete: function () {
                            degree += complete - degree;
                            $(this).css('transform', 'rotate(' + degree + 'deg)');
                            $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
                            itemContainer.addClass('super-menu-item-container-open');
                            itemContainer.stop().animate({
                                left: 0
                            }, scope.menuSpeed);
                        },
                    }, scope.buttonSpeed || "fast");
                }
            });
            $(document).click(function (e) {
                var $target = $(e.target);
                if (!$target.is('.super-menu-button-container') && !$target.is('.super-menu-container') && $('.super-menu-item-container-open').length > 0) {
                    btn.click();
                }
            });
        }
    };
});