function updateProfileTime() {
  const timeNow = new Date()
  const utcTime = timeNow.toUTCString()
  document.getElementById('current-time-utc').textContent = `🕒 ${utcTime}`
}

updateProfileTime()
setInterval(updateProfileTime, 1000)
