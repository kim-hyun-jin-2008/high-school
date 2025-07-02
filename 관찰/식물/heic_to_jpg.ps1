
Write-Host ""
Write-Host "-------------------------------------- Start"
Write-Host ""


Get-ChildItem -Filter "*.heic" | ForEach-Object {
    $outputPath = $_.BaseName + ".jpg"
    Write-Host "변환 중: $($_.Name) -> $outputPath"
    
    try {
        # ImageMagick 사용
        $result = & magick "$($_.FullName)" "$outputPath" 2>&1
        
        if (Test-Path $outputPath) {
            Write-Host "완료: $outputPath" -ForegroundColor Green
        } else {
            Write-Host "실패: $result" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "오류: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "모든 변환 작업이 완료되었습니다."
Write-Host ""
# Read-Host "아무 키나 누르세요"