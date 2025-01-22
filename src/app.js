// update Title And Favicon

export const updateTitleAndFavicon = () => {
  const titles = [
    "Salam, bir dəqiqə...",
    "Biz hələ də burdayıq."
  ]
  const favicons = [
    "/greenHeart.ico",
    "/greenHeart.ico"
  ]

  let titleIndex = 0
  let faviconIndex = 0

  setInterval(() => {
    document.title = titles[titleIndex]

    const link = document.querySelector('link[rel="shortcut icon"]')
    link.href = favicons[faviconIndex]

    titleIndex = (titleIndex + 1) % titles.length
    faviconIndex = (faviconIndex + 1) % favicons.length
  }, 1500)
}




