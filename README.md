# node-nordvpn

A node client that connects to nordvpn through openvpn using [node-openvpn](https://github.com/luigiplr/node-openvpn).

## Setup

First, clone this repo.

```sh
$ git clone https://github.com/geotrev/node-nord.git
```

Then install dependencies.

```sh
$ npm i
```

Since you'll be using nordvpn, you need to create credentials. Create a new local file called `.auth`. It will be hidden from git via `.gitignore` by default; DO NOT commit this file if you fork this repo (unless the repo is private, I guess).

```sh
$ touch .auth
$ echo "<YOUR_NORDVPN_EMAIL>" >> .auth
$ echo "<YOUR_NORDVPN_PASSWORD>" >> .auth
```

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

### --randomize

Alias: `-r`

Default: `false`

Usage: `npm start -- --randomize` or `npm start -- -r`

Will randomize the nordvpn server you're given. 

### --protocol

Alias: `-p`

Default: `udp`

Usage: `npm start -- --protocol tcp` or `npm start -- -p tcp`

Configures which protocol to use when connecting.

