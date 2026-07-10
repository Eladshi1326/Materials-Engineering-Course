@echo off
chcp 65001 >nul 2>&1
title Push to GitHub - Materials Engineering Course
cd /d "%~dp0"

echo.
echo  ==================================================
echo    Materials Engineering Course  -^>  GitHub
echo    https://github.com/Eladshi1326/Materials-Engineering-Course
echo  ==================================================
echo.

where git >nul 2>&1
if errorlevel 1 (
  echo  [X] Git is not installed.
  echo      Download it here: https://git-scm.com/download/win
  echo.
  pause
  exit /b 1
)

rem ---------- identity ----------
git config user.name  >nul 2>&1 || git config --local user.name  "Eladshi1326"
git config user.email >nul 2>&1 || git config --local user.email "eladshi1326@gmail.com"

rem ---------- repo ----------
if not exist ".git" (
  echo  [*] Initializing git repository...
  git init >nul
  git symbolic-ref HEAD refs/heads/main
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo  [*] Adding remote "origin"...
  git remote add origin https://github.com/Eladshi1326/Materials-Engineering-Course.git
)

rem ---------- commit ----------
echo  [*] Staging files...
git add -A

set "MSG=%~1"
if "%MSG%"=="" set "MSG=update: %DATE% %TIME%"

git commit -m "%MSG%" >nul 2>&1
if errorlevel 1 (
  echo  [i] Nothing new to commit.
) else (
  echo  [+] Commit created: %MSG%
)

git branch -M main >nul 2>&1

rem ---------- push ----------
echo  [*] Pushing to GitHub...
git push -u origin main
if errorlevel 1 (
  echo.
  echo  [!] Push rejected. Syncing with the remote and retrying...
  git pull --rebase --allow-unrelated-histories origin main
  if errorlevel 1 (
    echo  [X] Could not rebase automatically. Resolve conflicts and run this file again.
    echo.
    pause
    exit /b 1
  )
  git push -u origin main
  if errorlevel 1 (
    echo  [X] Push failed. Check your GitHub credentials / internet connection.
    echo.
    pause
    exit /b 1
  )
)

echo.
echo  [OK] Done. The code is on GitHub.
echo       Netlify will pick it up automatically if the site is connected.
echo.
pause
