# Docker Puppeteer

This is a small project aiming to fix the problem of puppeteer not working inside docker containers. The problem is that puppeteer requires a lot of dependencies to be installed in the container, and it's not always easy to install them. This project aims to solve this problem by providing a docker image with puppeteer and all its dependencies pre-installed.

this image is intended to be used as a base image for other docker images that require puppeteer.
