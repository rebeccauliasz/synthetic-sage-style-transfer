# synthetic-sage-style-transfer

## instructions for use:

wait until style transfer model loads.
press display button to reveal unstyled images (warning: porn).
press transfer style button to apply the style transfer.
this could take several minutes depending on network and processing speed.
(on my machine it takes about 45 seconds).

## Note on CORS (cross-origin use of images will be banned from most browsers) 

To get around this: 

1. make sure CORS is enabled in browser: there is an Allow-Control-Allow-Origin plugin for Chrome Browser: [here](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)
2. start Chome with web security flag turned off from terminal: 

    open -a Google\ Chrome --args --disable-web-security --user-data-dir -–allow-file-access-from-files
3. run index.html using python server: 

    python -m http.server
4. If it still is giving CORS errors, try enabling Chrome flag "treat insecure origin as secure": chrome://flags/#unsafely-treat-insecure-origin-as-secure and add localhost as origin.
