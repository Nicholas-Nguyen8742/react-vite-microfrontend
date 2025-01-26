# Installation Guide

Below are detailed steps to install various pre-requisites for local development of `tourbook-2`.

_**Pre-requisites**_: [Cloning](#clone-repository) | [nvm](#install-nvm) | [pnpm](#install-pnpm)

_**Development**_: [Install Dependencies](#install-dependencies) | [Start Build](#start-building)

_**Database**_: [PostgreSQL](#install-postgresql)

____

## Pre-requesites

### Clone Repository

```bash
git clone https://github.com/colliers-international/<repository-name>

```

```bash
cd <repository-name>
```

> To remove git tracking information you can run the following command:
>
> ```bash
> rm -rf .git
> ```

### Install nvm

Node Version Manager documentation can be found [here](https://github.com/nvm-sh/nvm) to enable management of multiple node.js versions whether it be for work or for professional development.

1. Install / Update using cURL or Wget:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

1. Run the following command to load nvm.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

1. Install node@22.13.1 with nvm

```bash
nvm install 22.13.1
```

### Install pnpm

pnpm (performant npm) is a package manager that is a package manager tool that allows you to track all of your dependencies that has multiple package. More information can be found [here](https://pnpm.io/)

1. Install pnpm via npm

> Ensure `nvm use 22.13.1` is run before installing pnpm via npm

```bash
npm i -g pnpm@9.15.4
```

> More installation options for pnpm can be found [here](https://pnpm.io/installation#using-a-standalone-script)

____

## Development

### Install Dependencies

```bash
pnpm install
```

### Start Building

```bash
pnpm build

pnpm dev
```

____

## Database

[Install PostgreSQL](#install-postgresql) | [pgAdmin 4](#download-pgadmin-4)

### Install PostgreSQL

1. Install PostgreSQL, and step through wizard.

### Download pgAdmin 4

1. Download appropriate version of pgAdmin 4 @ [here](https://www.pgadmin.org/download/).
