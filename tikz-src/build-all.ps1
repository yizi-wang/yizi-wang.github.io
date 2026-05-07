# TikZ to SVG build script
# Usage: .\build-all.ps1          (compile all .tex files)
#        .\build-all.ps1 myfile   (compile single file without extension)

$ErrorActionPreference = "Continue"

$miktexBin = "C:\Users\46537\AppData\Local\Programs\MiKTeX\miktex\bin\x64"
$env:PATH = "$miktexBin;$env:PATH"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputDir = Join-Path (Split-Path -Parent $scriptDir) "public\images\tikz"

if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

function Compile-Tikz($texFile) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($texFile)
    $workDir = Join-Path $env:TEMP "tikz-build-$name"
    if (Test-Path $workDir) { Remove-Item -Recurse -Force $workDir }
    New-Item -ItemType Directory -Path $workDir -Force | Out-Null

    Copy-Item $texFile "$workDir\$name.tex"
    Push-Location $workDir

    try {
        Write-Host "Compiling $name.tex ..." -ForegroundColor Cyan

        # latex -> DVI
        & latex -interaction=nonstopmode "$name.tex" 2>&1 | Out-Null
        if (!(Test-Path "$name.dvi")) {
            Write-Host "  FAILED: no DVI produced" -ForegroundColor Red
            return
        }

        # DVI -> SVG
        & dvisvgm --no-fonts --exact "$name.dvi" -o "$name.svg" 2>&1 | Out-Null
        if (!(Test-Path "$name.svg")) {
            Write-Host "  FAILED: no SVG produced" -ForegroundColor Red
            return
        }

        $dest = Join-Path $outputDir "$name.svg"
        Copy-Item "$name.svg" $dest -Force
        Write-Host "  OK -> $dest" -ForegroundColor Green
    }
    finally {
        Pop-Location
        Remove-Item -Recurse -Force $workDir -ErrorAction SilentlyContinue
    }
}

if ($args.Count -gt 0) {
    # Compile single file
    $target = $args[0]
    if (!$target.EndsWith(".tex")) { $target = "$target.tex" }
    $texPath = Join-Path $scriptDir $target
    if (!(Test-Path $texPath)) {
        Write-Host "File not found: $texPath" -ForegroundColor Red
        exit 1
    }
    Compile-Tikz $texPath
}
else {
    # Compile all .tex files
    $texFiles = Get-ChildItem -Path $scriptDir -Filter "*.tex" -File
    if ($texFiles.Count -eq 0) {
        Write-Host "No .tex files found in $scriptDir" -ForegroundColor Yellow
        exit 0
    }
    foreach ($f in $texFiles) {
        Compile-Tikz $f.FullName
    }
}

Write-Host "`nDone." -ForegroundColor Green
