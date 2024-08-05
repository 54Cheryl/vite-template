function detectDevice () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  const userAgentData = navigator.userAgentData

  // 判斷 iOS 裝置
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'mobile'
  }

  // 判斷 Android 裝置
  if (/android/i.test(userAgent)) {
    return 'mobile'
  }

  // 判斷其他手機裝置
  if (/mobile/i.test(userAgent)) {
    return 'mobile'
  }

  const applePad = (navigator.userAgent.match(/(iPad)/) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
  // const isPad = (navigator.userAgent.match(/(iPad)/) || (navigator.platform === 'Linux armv81' && navigator.maxTouchPoints > 1))

  if (applePad) {
    return 'tablet'
  }

  // 特定情況默認為筆電
  if (userAgentData.platform === 'macOS') {
    return 'desktop'
  } else if (userAgentData.platform === 'Windows') {
    return 'desktop'
  }

  // 其他情況默認為 Android 平板
  return 'tablet'
}

export { detectDevice }
