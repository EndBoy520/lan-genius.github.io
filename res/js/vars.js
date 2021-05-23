window.downloads = {
    android: 'https://wwi.lanzoux.com/ii3cDnelvva',
    windows: 'https://wwe.lanzoux.com/i4ZDUfwxs3g',
    linux: 'https://wwe.lanzoux.com/iom0Bfwxt9i',
    mac: 'https://wwe.lanzoux.com/iKnR4fwxs0d',
}

function changeLanguage(me) {
    switch (me.value) {
        case 'en':
            location.href = '/en/index.html';
            break;
        case 'zh':
            location.href = '/index.html';
            break;
    }
    localStorage.setItem('language','select')
}
