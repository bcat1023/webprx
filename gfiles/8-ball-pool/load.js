window.famobi_gameID = "8-ball-billiards-classic";
      window.famobi_gameJS = ['js/all.js',
         function() {

         }
      ];
      (function (document, url, fgJS, firstJS) {
        fgJS = document.createElement('script');
        firstJS = document.getElementsByTagName('script')[0];
        fgJS.src = url + encodeURIComponent(document.location.href);
        firstJS.parentNode.insertBefore(fgJS, firstJS);
      })(document, 'js/start.js?e=');