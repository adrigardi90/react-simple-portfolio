export const openNewTab = (url: string = '') => () => window.open(url, '_blank')

export const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent)