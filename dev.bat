@echo off
chcp 65001 >nul 2>&1
title Materials Engineering Course - Dev Server
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo  [X] Node.js is not installed.
  echo      Download the LTS version: https://nodejs.org
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo  [*] First run - installing dependencies (this takes a minute)...
  call npm install
  if errorlevel 1 (
    echo  [X] npm install failed.
    pause
    exit /b 1
  )
)

echo.
echo  [*] Starting the dev server...  (Ctrl+C to stop)
echo      The site will open at http://localhost:5173
echo.
start "" http://localhost:5173
call npm run dev
pause
