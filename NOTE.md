# NOTE

## install `tslint-config-airbnb`

got an error like below.

```shell
npm i -D tslint-config-airbnb

npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: typescript-practice@1.0.0
npm ERR! Found: tslint@6.1.3
npm ERR! node_modules/tslint
npm ERR!   dev tslint@"^6.1.3" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer tslint@"^5.11.0" from tslint-config-airbnb@5.11.2
npm ERR! node_modules/tslint-config-airbnb
npm ERR!   tslint-config-airbnb@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/username/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/username/.npm/_logs/2021-07-28T08_07_23_583Z-debug.log
```

this log means version conflict. I removed `tslint` and reinstall specific version using below command.

```shell
# after remove tslint
npm i -D tslint@"^5.11.0"
# no error log
npm i -D tslint-config-airbnb
# no error log
```

## do not use `gts`

but looks like makes more easy to config. (maybe after install `gts`) command like below.

```shell
npx gts init
```