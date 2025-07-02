
Write-Host ""
Write-Host "-------------------------------------- Start"
Write-Host ""


Get-ChildItem -Filter "*.heic" | ForEach-Object {
    $outputPath = $_.BaseName + ".jpg"
    Write-Host "��ȯ ��: $($_.Name) -> $outputPath"
    
    try {
        # ImageMagick ���
        $result = & magick "$($_.FullName)" "$outputPath" 2>&1
        
        if (Test-Path $outputPath) {
            Write-Host "�Ϸ�: $outputPath" -ForegroundColor Green
        } else {
            Write-Host "����: $result" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "����: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "��� ��ȯ �۾��� �Ϸ�Ǿ����ϴ�."
Write-Host ""
# Read-Host "�ƹ� Ű�� ��������"