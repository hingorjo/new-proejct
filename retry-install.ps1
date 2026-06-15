$max_retries = 10;
$retry_count = 0;
$success = $false;

while (-not $success -and $retry_count -lt $max_retries) {
    npm install -D tailwindcss@3 postcss autoprefixer --legacy-peer-deps
    if ($LASTEXITCODE -eq 0) {
        $success = $true
    } else {
        $retry_count++
        Write-Host "Retry $retry_count..."
        Start-Sleep -Seconds 3
    }
}

if ($success) {
    npm run dev
} else {
    Write-Host "Failed to install after $max_retries retries."
}
