# Start Dev Server Script
$env:PATH = "C:\Program Files\nodejs;" + [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Set-Location $PSScriptRoot

Write-Host "Starting Astro development server..." -ForegroundColor Green
npm run dev


