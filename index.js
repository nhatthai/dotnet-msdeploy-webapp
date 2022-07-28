const core = require('@actions/core');

async function run() {
  try {
    const IIS_SERVER_COMPUTER_NAME = `${process.env.IIS_SERVER_COMPUTER_NAME}`
    const IIS_WEBSITE_NAME = `${process.env.IIS_WEBSITE_NAME}`
    const IIS_SERVER_USERNAME = `${process.env.IIS_SERVER_USERNAME}`
    const IIS_SERVER_PASSWORD = `${process.env.IIS_SERVER_PASSWORD}`
    const APP_NAME = `${process.env.APP_NAME}`
    const PHYSICAL_PATH = `${process.env.PHYSICAL_PATH}`

    if (process.env.IIS_SERVER_COMPUTER_NAME) {
      core.debug('IIS_SERVER_COMPUTER_NAME is set');
    }
    else {
      core.setFailed(`IIS_SERVER_COMPUTER_NAME is not set: ${IIS_SERVER_COMPUTER_NAME}`);
    }

    if (process.env.IIS_WEBSITE_NAME) {
      core.debug('IIS_WEBSITE_NAME is set');
    }
    else {
      core.setFailed(`IIS_WEBSITE_NAME is not set: ${IIS_WEBSITE_NAME}`);
    }

    if (process.env.IIS_SERVER_USERNAME) {
      core.debug('IIS_SERVER_USERNAME is set');
    }
    else {
      core.setFailed(`IIS_SERVER_USERNAME is not set: ${IIS_SERVER_USERNAME}`);
    }

    if (process.env.IIS_SERVER_PASSWORD) {
      core.debug('IIS_SERVER_PASSWORD is set');
    }
    else {
      core.setFailed(`IIS_SERVER_PASSWORD is not set: ${IIS_SERVER_PASSWORD}`);
    }

    if (process.env.APP_NAME) {
        core.debug('APP_NAME is set');
    }
    else {
      core.setFailed(`APP_NAME is not set: ${APP_NAME}`);
    }

    if (process.env.PHYSICAL_PATH) {
      core.debug('PHYSICAL_PATH is set');
    }
    else {
      core.setFailed(`PHYSICAL_PATH is not set: ${PHYSICAL_PATH}`);
    }

  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
