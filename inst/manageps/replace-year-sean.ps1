Get-ChildItem -Path (Get-Location) -Filter *.html -Recurse | ForEach-Object {
    $filePath = $_.FullName
    (Get-Content -Path $filePath) -replace "2025 Sean Maden", "2026 Sean Maden" | Set-Content -Path $filePath
}