// Vertical Align Element
$.fn.verticalAlign = function(){
    $(this).each(function(){
        var $this = this;
        var $parent = $(this).parent();
        $(this).wrap($('<div/>', {class: 'vertical-helper'}));
        var alignCenter = $(this).data('vertical-align').indexOf('bottom') === 0 ? false : true;
        var type = $(this).data('vertical-align').indexOf('padding') > -1 ? 'padding' : 'margin';
        function center(){
            $($this).closest('.vertical-helper').css(type+'-top', 0);
            if(alignCenter)
                $($this).closest('.vertical-helper').css(type+'-top', Math.floor(($parent.height() - $($this).height()) / 2));
            else
                $($this).closest('.vertical-helper').css(type+'-top', Math.floor(($parent.height() - $($this).height()) - 2));
        }
        center();
        $(window).resize(center);
    });
};
$('[data-vertical-align]').verticalAlign();