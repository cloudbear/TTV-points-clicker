// ==UserScript==
// @name         TTV-points-clicker
// @namespace    cloudbear/TTVPC
// @version      0.1
// @description  Periodically check for and click the channel points bonus box.
// @author       cloudbear
// @match        https://*.twitch.tv/*
// @exclude      https://*.twitch.tv/videos/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.0.slim.min.js#sha256=MlusDLJIP1GRgLrOflUQtshyP0TwT/RHXsI1wWGnQhs=
// ==/UserScript==

(function() {
  let channelpointsenabled = false;
  let handle_channelpointsenabled;
  let handle_buttonclick;

  function clearAllIntervals() {
    clearInterval(handle_buttonclick);
    clearInterval(handle_channelpointsenabled);
  }

  function channelPointsEnabled() {
    channelpointsenabled =  $('.community-points-summary').length > 0;
    if (channelpointsenabled) {
      console.log('TTVPC: Channel points enabled. Setting: button check 10s, channel points check 5m.');
      clearAllIntervals();
      handle_channelpointsenabled = setInterval(channelPointsEnabled, 300000);
      handle_buttonclick = setInterval(clickBonusButton, 10000);
    } else {
      console.log('TTVPC: Channel points not enabled. Setting: button check none, channel points check 5m.');
      clearAllIntervals();
      handle_channelpointsenabled = setInterval(channelPointsEnabled, 300000);
    }
  }

  function clickBonusButton() {
    if (channelpointsenabled) {
      const bonusbutton = $('.community-points-summary > div:nth-child(2) button');
      if (bonusbutton.length) {
        console.log('TTVPC: Bonus button found; clicking.');
        bonusbutton.click();
      }
    } else {
      console.log('TTVPC: Call to clickBonusButton but channel points not enabled.');
    }
  }

  $(document).ready(function() {
    console.log('TTVPC: Document ready. Checking channel points enabled in 60s');
    handle_channelpointsenabled = setInterval(channelPointsEnabled, 60000);
  });
})();