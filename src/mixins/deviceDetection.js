function detectDevice () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  // 判斷 iOS 裝置
  console.log(navigator.userAgent)
  console.log(navigator.platform)
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'mobile' + navigator.maxTouchPoints
  }
  const isiPad = (navigator.userAgent.match(/(iPad)/) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))

  if (isiPad) {
    return 'tablet' + navigator.maxTouchPoints
  }
  // 判斷 Android 裝置
  if (/android/i.test(userAgent)) {
    return 'mobile' + navigator.maxTouchPoints
  }

  // 判斷其他手機裝置
  if (/mobile/i.test(userAgent)) {
    return 'mobile' + navigator.maxTouchPoints
  }

  // 其他情況默認為電腦
  return 'desktop' + '。userAgent：' + navigator.userAgent + '。platform：' + navigator.platform + '。maxTouchPoints：' + navigator.maxTouchPoints
}

export { detectDevice }
