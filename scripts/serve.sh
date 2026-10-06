#!/usr/bin/env bash
# Yerel prod sunucusunu (yeniden) başlatır: scripts/serve.sh [port]   (ortam değişkenleri aynen geçer)
PORT=${1:-3100}
pkill -f '^next-server' 2>/dev/null; sleep 1
nohup npx next start -p "$PORT" > "${TMPDIR:-/tmp}/next-$PORT.log" 2>&1 &
sleep 4
curl -s -o /dev/null -w "ready: %{http_code}\n" "http://localhost:$PORT/"
