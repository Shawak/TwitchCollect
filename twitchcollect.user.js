// ==UserScript==
// @name         TwitchCollect
// @namespace    https://github.com/Shawak/TwitchCollect
// @author       Shawak
// @version      0.0.2
// @description  Automatically collect twitch channel points
// @match        *://*.twitch.tv/*
// @downloadURL  https://github.com/Shawak/TwitchCollect/raw/master/twitchcollect.user.js
// @updateURL    https://github.com/Shawak/TwitchCollect/raw/master/twitchcollect.user.js
// ==/UserScript==

(function() {
    'use strict';

    function collect() {
        const elements = document.querySelectorAll('.claimable-bonus__icon');
        for (let element of elements) {
            element.click();
        }
    }

    setInterval(collect, 5000);

})();
