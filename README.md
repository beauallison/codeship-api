# Codeship API

Promise based wrapper for the Codeship V2 API

![Build Status][badgeBuild] ![Coverage Status][badgeCov]

## V2 API - Required Access

V2 of the Codeship API requires a dedicated _codeship.com_ account to access; this restricts the use of

- Third party authentication services - Github, Gitlab, Bitbucket etc
- Accounts with 2FA

For each project where access is required the _codeship.com_ must be in a respective Team for that project. For further information refer to the [Codeship documentation][codeshipAuth].

## Install

```shell
npm install --save codeship-api
```

## Usage

### Authenticate

Authenticates against the Codeship API populating the class with the organizations, token and expiry. Reauthentication is automatic upon refreshing.

```javascript
const Codeship = require('codeship');

(async () => {
  const codeship = new Codeship({ username: 'test', password: 'test' });
  await codeship.authenticate();

  console.log(codeship);
  // "expiry": 1504275032,
  // "organizations": {
  //   "Codeship": {
  //     "scopes": [
  //       "build.read",
  //       "project.read",
  //     ],
  //     "uuid": "dc37c39f-731e-4100-b8bf-69dae9eb14aa",
  //   },
  //   "Codeship Test Org": {
  //     "scopes": [
  //       "build.read",
  //       "build.write",
  //       "project.read",
  //       "project.write",
  //     ],
  //     "uuid": "dc37c39f-731e-4100-b8bf-69dae9eb14ab",
  //   },
  // },
  // "token": "eyJ0eXAi...",
});
```

### Refresh

Populates each organization in `codeship.organizations` with it's projects and builds.

```javascript
await codeship.refresh();
```

### Stop Build

```javascript
const build = {
    organization: '721cea10-b695-0134-5b94-000000000000',
    project: '7b3596c0-560e-0135-5b18-000000000000',
    build: '20b4a690-6a03-0135-d6ec-000000000000',
  };

await codeship.stopBuild(build);
```

### Restart Build

```javascript
const build = {
    organization: '721cea10-b695-0134-5b94-000000000000',
    project: '7b3596c0-560e-0135-5b18-000000000000',
    build: '20b4a690-6a03-0135-d6ec-000000000000',
  };

await codeship.restartBuild(build);
```

<!-- Links -->
[codeshipAuth]: https://apidocs.codeship.com/v2/authentication
[badgeBuild]: https://app.codeship.com/projects/82a41380-5c65-0136-faf2-122d0cdfbe1f/status?branch=master
[badgeCov]: https://
