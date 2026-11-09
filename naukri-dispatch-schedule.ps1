# naukri-dispatch-schedule.ps1
# Dispatches GitHub Actions profile refresh for Account 1 and Account 2 alternating every 45 minutes.

$now = Get-Date
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$logFile = Join-Path $scriptDir "naukri-dispatch.log"

function Log-Message([string]$msg) {
    $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    $line = "[$timestamp] $msg"
    Write-Output $line
    Add-Content -Path $logFile -Value $line -ErrorAction SilentlyContinue
}

# 1. Skip weekends
if ($now.DayOfWeek -eq [DayOfWeek]::Saturday -or $now.DayOfWeek -eq [DayOfWeek]::Sunday) {
    Log-Message "Weekend ($($now.DayOfWeek)) - skipping."
    exit 0
}

# 2. Check active window (8:20 AM to 6:30 PM IST)
$startWindow = (Get-Date -Hour 8 -Minute 20 -Second 0)
$endWindow   = (Get-Date -Hour 18 -Minute 30 -Second 0)

if ($now -lt $startWindow -or $now -gt $endWindow) {
    Log-Message "Outside active window (08:20 - 18:30) - skipping."
    exit 0
}

# 3. Calculate slot from 08:30 AM
# Slot 0 (08:30): Account 1
# Slot 1 (09:15): Account 2
# Slot 2 (10:00): Account 1
# Slot 3 (10:45): Account 2
# Slot 4 (11:30): Account 1
# Slot 5 (12:15): Account 2
# Slot 6 (13:00): Account 1
# Slot 7 (13:45): Account 2
# Slot 8 (14:30): Account 1
# Slot 9 (15:15): Account 2
# Slot 10 (16:00): Account 1
# Slot 11 (16:45): Account 2
# Slot 12 (17:30): Account 1
# Slot 13 (18:15): Account 2

$baseTime = (Get-Date -Hour 8 -Minute 30 -Second 0)
$diffMinutes = ($now - $baseTime).TotalMinutes

$slotIndex = [Math]::Round($diffMinutes / 45)

if ($slotIndex % 2 -eq 0) {
    $repo = "Anand-C3/naukri-update"
    $account = "Account 1"
} else {
    $repo = "Anand-C3/naukri-update-2"
    $account = "Account 2"
}

Log-Message "Active slot $slotIndex -> triggering $account ($repo)..."
try {
    $result = & gh workflow run naukri-refresh.yml --repo $repo 2>&1
    Log-Message "Dispatched successfully: $result"
} catch {
    Log-Message "Error triggering $($repo): $($_.Exception.Message)"
}
