const padTime = valeur => {
  return valeur.toString().padStart(2, '0')
}

const durationConverter = yt_duration => {
  const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/
  const extracted = time_extractor.exec(yt_duration)
  const hours = parseInt(extracted[1], 10) || 0
  const minutes = parseInt(extracted[2], 10) || 0
  const seconds = parseInt(extracted[3], 10) || 0
  return `${hours == 0 ? `` : `${hours}:`}${padTime(minutes)}:${padTime(
    seconds
  )}`
}

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + ' k'
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + ' M'
  } else if (num < 900) {
    return num
  }
}

export { durationConverter, numFormatter }
