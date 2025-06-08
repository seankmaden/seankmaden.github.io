Get-ChildItem -Path (Get-Location) -Filter *.html -Recurse | ForEach-Object {
    $filePath = $_.FullName
    (Get-Content -Path $filePath) -replace "Copilot AI, version 2025", "Copilot AI, version 2026" | Set-Content -Path $filePath
}