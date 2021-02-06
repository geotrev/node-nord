# node-nordvpn

A node client that connects to nordvpn through openvpn using [node-openvpn](https://github.com/luigiplr/node-openvpn).

## Setup & Usage

Clone this repo.

```sh
$ git clone https://github.com/geotrev/node-nord.git
```

Install dependencies.

```sh
$ npm i
```

Add your nordvpn credentials.

```sh
$ touch .auth
$ echo "<YOUR_NORDVPN_EMAIL>" >> .auth
$ echo "<YOUR_NORDVPN_PASSWORD>" >> .auth
```

_NOTE: This file will be hidden via `.gitignore`; DO NOT commit this file if you fork this repo (unless the repo is private, I guess)._

Finally, run the vpn.

```sh
$ npm start
```

## Customization

Everyone uses VPNs differently. For that reason, there are some useful flags you may be interested in.

### --country

Alias: `-c`

Default: `united states`

Usage: `npm start -- --country albania` or `npm start -- -c albania`

Configures the target country you'll use when connecting to nordvpn's servers.

_NOTE: I'll probably add an option in the future to set a custom default country._

### --protocol

Alias: `-p`

Default: `udp`

Usage: `npm start -- --protocol tcp` or `npm start -- -p tcp`

Configures which protocol to use when connecting.

### --randomize

Alias: `-r`

Default: `false`

Usage: `npm start -- --randomize` or `npm start -- -r`

Will randomize the nordvpn server you're given. 
