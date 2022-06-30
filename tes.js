document.getElementById('decrypt-form').addEventListener('submit', function (c) {
    c.preventDefault();
    try {
        var d = document.getElementById('decryption');
        var e = d.getAttribute('data-href'),
            f = document.getElementById('decrypt-password').value,
            h = CryptoJS.AES.decrypt(e, f),
            h = h.toString(CryptoJS.enc.Utf8);
        if (h === '') {
            document.getElementById('decrypt-alert').innerHTML = '<div class="decrypt-alert">Wrong Passwbbbbbbbbbord!</div>';
            setTimeout(function () {
                document.getElementById('decrypt-alert').innerHTML = '';
            }, 0x3e8);
            return;
        } else {
            document.getElementById('decrypt-box').innerHTML = h;
            document.close();
        }
    } catch (i) {
        document.getElementById('decrypt-alert').innerHTML = '<div class="decrypt-alert">Wrong Password!</div>';
        setTimeout(function () {
            document.getElementById('decrypt-alert').innerHTML = '';
        }, 0x3e8);
        return;
    }
});
