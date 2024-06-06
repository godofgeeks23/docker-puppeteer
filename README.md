# Docker Puppeteer

This is a small project aiming to fix the problem of puppeteer not working inside docker containers. The problem is that puppeteer requires a lot of dependencies to be installed in the container, and it's not always easy to install them. This project aims to solve this problem by providing a docker image with puppeteer and all its dependencies pre-installed.

This image is intended to be used as a base image for other docker images that require puppeteer.

## About Puppeteer

Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.