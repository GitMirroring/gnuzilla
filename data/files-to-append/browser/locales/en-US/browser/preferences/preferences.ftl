
## IceCat-specific privacy settings

icecat-privacy-group-header =
    .label = IceCat-specific privacy settings

disable-javascript-option =
    .label = Disable JavaScript
    .description = Disabling Javascript greatly improves privacy, security and freedom, but it will break many sites.

disable-custom-fonts-option =
    .label = Do not load custom fonts
    .description = Custom fonts can be used for fingerprinting. Disabling them improves privacy but may make some sites look wrong.

isolate-request-first-party-option =
    .label = Isolate requests to First Party domains
    .description = This improves privacy, but it may interfere with login into some sites.

auto-update-extensions-option =
    .label = Automatically update extensions
    .description = Enabling automated updates is good for security, but would start Internet connections in the background.

spoof-referers-option =
    .label = Spoof Referers
    .description = Referers tell sites what link brought you there. This feature greatly improves your privacy, but it may break functionality on some sites.

resist-fingerprinting-option =
    .label = Resist Fingerprinting
    .description = Enable several measures to prevent fingerprinting.

detect-captive-portal-option =
    .label = Detect captive portal
    .description = Captive portals are the sites that control access to public wireless networks in hotels, airports, cafes, etc. The detection service is useful if you connect to such netwoks, but it will start connections automatically.

detect-network-connectivity-option =
    .label = Detect network connectivity
    .description = The network connectivity service checks if IPv4/v6 DNS lookups work on the current network, whether connecting to IPv4/v6 addresses work on the current network, and whether a NAT64 gateway is detected on the network. These help the browser assess the network connectivity state, but will result in automatic DNS queries and HTTP connections being made for those checks.

geolocation-option =
    .label = Enable Geolocation
    .description = This is commonly used for maps, weather sites, and some stores. It is better to keep it off unless you really need it.

webgl-option =
    .label = Enable WebGL
    .description = Needed to visualize 3D graphics, but it may expose you to security threats. Enable it only if you really use it.
