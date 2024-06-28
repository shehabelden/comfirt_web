'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1def6050e53960673dc65ff2ef9a1837",
".git/config": "7491cce0ea2f88e7d3b1883a8385c4bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "72cf8247fbf4a9b06074be104fd5b006",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a4f1b96e795fc2f8290b869f3dce519",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33a63c45cf7055725e973b03a73abf2d",
".git/logs/refs/heads/div": "11d1fab5e7be0a8481ec447282499bfc",
".git/logs/refs/heads/main": "a2942274a97a41d808dd518f03aecab4",
".git/logs/refs/heads/master": "cb3f57fd082a911edbc38a1075edd057",
".git/logs/refs/heads/newbranch": "f321f06b54ec0bee8628fb49695576be",
".git/logs/refs/remotes/origin/div": "a5a3fb7405b5e132c146a36df503f9ee",
".git/logs/refs/remotes/origin/main": "85daef4cab2187369c8be00ae9345434",
".git/logs/refs/remotes/origin/newbranch": "267fafb1033eeaaae6b20032675e8851",
".git/objects/03/4fa9109f963a0f1f7a61324b1e8f6e4732a5b7": "c3fe89a106ab0181c824677d13f57e91",
".git/objects/04/ffea59f194672fc30706056929d6bd719e03f4": "c3ffcd1dc3463624f5cef70ef500f5c9",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/8de6fb81d1559e104cc9d27887bc9dcd353c0f": "3e3b713c24c1825aa2fb203148369e50",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/da6b34f25a7f8d159d6d20d991b6dc080fe817": "2bd46c29518a35c9fabcdb55fe4fdd0a",
".git/objects/14/2944283a1e40f3467da48633734530df75d736": "942384f0992458baa79c241659cde31d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/c92e78f6977d53ba6af3322b6474e0528012ed": "2ab3a0b37ddfcf66fb9fb410128640a7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/2c60f440ab7367fa8366e2b3cb3af9d897930b": "db5e5bd3423abcb9083fb43a0094672c",
".git/objects/26/1f3ffe43a636347de2771bedb696b323cc3a82": "1cfac13c4b2e30d76ade6655586e3e94",
".git/objects/34/8f8d894a5f60e7b420612e827da56d824700d0": "1923588c7c765f461da12173c9a57187",
".git/objects/36/108172e22a9fd854bed0c87db6090a83bb90e4": "a46260986f3e9114fbcb9ea28fda1416",
".git/objects/37/8179ec928899b918ebf754c797f89b44e3cc37": "f3ee2db8869596fec63f724b85f7c862",
".git/objects/43/cd80f13227cdbcb73f048c793eab3668173e6d": "39f0bacc423e3fc11bb984cb69a96f75",
".git/objects/49/3c8d571a32dc07fe056b423c87fb4510bb9635": "10e0891b8bf4d76a8e3b1b6c2f42fdb1",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/d2c7caad4aa5ca7ef4808240de8b7aa8a8f50e": "d5ed566f372438c2e1bffa08f1d2122a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/0fcd09d7e420b7cf9c79ae16dfd91cf40edcf2": "71d36562c5f94b7c3f2716f73e410280",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/1d39d1d7facbc80670c2a1b80e4e1130aed486": "0c899b024774fb9717b2f8342fdc1aa0",
".git/objects/6f/d4239642ecb6d6d248b04b3702436b08821ed2": "31c6ddb951d41b62cfa219fd9db60290",
".git/objects/70/91440ebf934bfdfee2b05581d83083e05c9fce": "961749d6ac1d6bc225c2ba22e00cfe26",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/aa86865451ba2d50cf97d1ac1f6b24d7b88d5c": "d26469b479561664666fe197f3237e7f",
".git/objects/73/66a88f2103197b6a3cbf07490d342860ff8dd5": "4bbd994928d36006e425201faba71c04",
".git/objects/75/64d9ddc32accfe3c3cb5b789015eb14ad09e49": "952105ceb1025989cb2800be86c0bae1",
".git/objects/78/906c179a62bcc25a53ad61394b5526be724296": "4dd84809aa451906e88c7094f02cceca",
".git/objects/79/45e8b7cb34f53411e4c461a039c7efff5d0886": "7fc296529c4473e734a7376abdc32605",
".git/objects/7c/3a2853a051009efe0e6d408baa5a080547ac0a": "9277c6a5fc2503267ef366a83c4367ce",
".git/objects/80/ba950199e29f7f795c0170043f2f9d7debe0ca": "3a0a0e045355a44544891b6834fe3bdc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5c7a9ad87f0275308092457d0a5c58c0da940c": "6a9b2979325b744d620ddd4a40ed6311",
".git/objects/8e/ff5d9872f1ee3ba859a2da853ef1e4def48198": "f127de2b538edc2cdf021db03409d814",
".git/objects/92/edd9a64d62ca36d33a35b65575cda9ec909498": "8f27dd67f859b968136972bbedbd8ef9",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/f69d49d560708e4a032597e25d0581fc9fac89": "8da9c9abfad781859dae6206e9c17e1e",
".git/objects/9b/be4920e533d2b26ffbedd5d60375b83c9b4670": "68ce3a7ff2d83cf94cfdee91c8dbed1e",
".git/objects/aa/54fbe18cb3ffaeafdff773cbc4e34da85233c3": "72561275e8f8293b580204e14cffa643",
".git/objects/ae/4537272ffca3c392a6d6dd638bf4c798cd1c6c": "3c050b64704039704dc502aebe52fa4b",
".git/objects/b1/b94d36445f57dd4717d7f57447ee4c781d362e": "c144f6642ae73bb218e80a27bf009435",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/cc4667ede0550cd0c8c6c9fbb99e50bb5c096f": "fb8a082a2ef2f703b5c439e1e9444b63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/e5b800265f1e197d29a9df9d26c32e332edba8": "49a34fd08e03008adcd48ee2353b85ed",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/6b77933c646d79329a04cd22de5f72bde07202": "d86dc70f3855ac50c19e520a6b465019",
".git/objects/cd/3e38abcfce4f01c3122f9db615f2ead9d40d69": "b1348c950a4a315b2c6d6fe9278bf23d",
".git/objects/d0/c3dc9975f09ea7bbd6a6e44e4bae308860d007": "ce3825b36e1a2077b183b60946eca09e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ed841ef6f10245bdfd56718230c6e86f45e216": "4b02d48bb39952b03d40d7f5ede11497",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4a245be3660d865b3e7cb43c380dee89d2ebb7": "0425006aa49f72697c116cd6acb7e034",
".git/objects/dd/11965226e05dd182b271df7b2977045a334e6b": "b0461e39e6d465573f95fa89e4f6259b",
".git/objects/de/d13633a9827dc2327adc61efd68b02067b1278": "9725979ae7991e456fcd676d2c22e149",
".git/objects/e8/93562d7b547ec22d79204df29da1cb9cb6c147": "5ecef22fa3f6112f4c1fa4871306d116",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4095a49b28606c22e0212d7c5060bcc9dd2e31": "d4f92c457e39e7dda5f1bb5c26ae022d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/579cf797ba8b483977d93339b813b3b3bd0b10": "41776c0756ceaaf4e161832a322b94fb",
".git/refs/heads/div": "e5a1e4a8f9cff5b7081f4950297c8d2c",
".git/refs/heads/main": "e5a1e4a8f9cff5b7081f4950297c8d2c",
".git/refs/heads/master": "949b931061407d83cb6d86a6e298e966",
".git/refs/heads/newbranch": "e67e80ac15218fc8df8046a3c0b933dd",
".git/refs/remotes/origin/div": "e5a1e4a8f9cff5b7081f4950297c8d2c",
".git/refs/remotes/origin/main": "949b931061407d83cb6d86a6e298e966",
".git/refs/remotes/origin/newbranch": "e67e80ac15218fc8df8046a3c0b933dd",
"assets/AssetManifest.bin": "fb7eaafdc476bcd1ec5248f3c62799c1",
"assets/AssetManifest.bin.json": "17c7079454a182c4b9f72b7afc29cee5",
"assets/AssetManifest.json": "628743c03cf9c00fe50e2cc38b7fed80",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c765b14882d69cdfb192ef0896731d75",
"assets/image/acdimy.jpg": "08c82bb57c6fa620ced01e83c62a20ae",
"assets/image/bu.jpg": "ed2bab6436668c61d78b8d231d7059bd",
"assets/image/comfarte%2520care%2520groub.jpg": "f7db43690bb5c961dff72dda690ab2c7",
"assets/image/cover%2520Image.jpg": "530b711c80024046e004c8dda74ab7d4",
"assets/image/salmtk.jpg": "cda6464e4a2837555c3c964d512b735b",
"assets/image/search-header-background.jpg": "98a973434f67cfe726ab4527aa21aedd",
"assets/NOTICES": "8e10c34a3b5328cf0431ca4b68baa5eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "721a5ddb7a0efdd5308fff02142d112b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a11b849f6176c5c3fe474b173f402030",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9104468ec260c6989f86b9f356c83218",
"/": "9104468ec260c6989f86b9f356c83218",
"main.dart.js": "674f614babf1f0c7e6ec571c503ccce3",
"manifest.json": "4f6036875c455c2bbb38090a526046b6",
"version.json": "a14bea84b8eba2fdf53689b42b57fff4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
