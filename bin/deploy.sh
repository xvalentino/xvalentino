#!/bin/bash
set -e

parcel build src/index.html
rm -rf /keybase/private/tino,kbpbot/my-site/*
cp -R dist/* /keybase/private/tino,kbpbot/my-site