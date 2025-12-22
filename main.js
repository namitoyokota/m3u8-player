$(window).on('load', function () {
    var $input = $('#m3u8-placeholder');
    var params = new URLSearchParams(window.location.search);
    var initial = params.get('url') || localStorage.getItem('m3u8-link') || '';
    $input[0].value = initial;

    $input.on('input', function () {
        var val = $input.val();
        var p = new URLSearchParams(window.location.search);
        if (val) p.set('url', val);
        else p.delete('url');
        var newUrl = window.location.pathname + (p.toString() ? '?' + p.toString() : '');
        history.replaceState(null, '', newUrl);
    });

    $('#form').on('submit', function (e) {
        e.preventDefault();
        var val = $input[0].value;
        localStorage.setItem('m3u8-link', val);
        var p = new URLSearchParams(window.location.search);
        if (val) p.set('url', val);
        else p.delete('url');
        var newUrl = window.location.pathname + (p.toString() ? '?' + p.toString() : '');
        history.replaceState(null, '', newUrl);
        window.location.href = './player' + '#' + val;
    });

    if (params.get('url')) {
        setTimeout(function () {
            $('#form').submit();
        }, 10);
    }
});
