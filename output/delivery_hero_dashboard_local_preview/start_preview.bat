@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to preview this dashboard.
  echo Please install Node.js, then double-click start_preview.bat again.
  pause
  exit /b 1
)
node server.cjs
pause
