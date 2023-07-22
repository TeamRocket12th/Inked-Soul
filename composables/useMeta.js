export const useMeta = () => {
  const meta = {
    commonSettings: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8'
    },
    index: {
      img: 'LOGO',
      title: 'Inked Soul 刺青媒合平台',
      name: '首頁',
      content: 'smoe description of the indexpage',
      link: 'link to the index page'
    },
    design: {
      img: 'LOGO',
      title: 'Inked Soul 刺青媒合平台 搜尋設計圖',
      name: '搜尋設計圖',
      content: 'smoe description of the design page',
      link: 'link to the design page'
    },
    artist: {
      img: 'LOGO',
      title: 'Inked Soul 刺青媒合平台 搜尋刺青師',
      name: '搜尋刺青師',
      content: 'smoe description of the artist page',
      link: 'link to the artist page'
    },
    login: {
      img: 'LOGO',
      title: 'Inked Soul 刺青媒合平台 登入',
      name: '登入',
      content: 'smoe description of the login page',
      link: 'link to the login page'
    }
  }

  return { meta }
}
