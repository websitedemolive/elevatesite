
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.98932aba6c7293aebf5d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.baseline.en.5049e6523013b01478b8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2319.baseline.en.ea3ce890adecb26931ba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5816.baseline.en.710b451159d9c7b926ef.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.4917618ebcf4c0eebd78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4100.baseline.en.3fdc34659ba56d12f6ca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6912.baseline.en.0c9514aa1a6b52ab5982.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/794.baseline.en.7e023b47810710eb89ce.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7600.baseline.en.5a71e042dbdc81912e72.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4127.baseline.en.44069cb8f76bc7cc3ee7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1068.baseline.en.54f4269fcbf536a050b7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/648.baseline.en.0f49d85fa4cc78257143.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5455.baseline.en.b92c376b17de8c4c9007.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8024.baseline.en.e31bfef15d4bfecec274.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8217.baseline.en.e1e4be5fde41da2cf45a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.2864492c5d632a11e079.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.baseline.en.e1fb046c8f952a6dbbcd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f29a03caa6ec33ffc52a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.f2bd16bc5afcfd5ef57f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0659/1617/4531/files/Ajouter_un_titre-removebg-preview_x320.png?v=1722999516"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  