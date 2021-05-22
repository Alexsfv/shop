export const setCookie = (name: string, value: string, maxAge = 86400) => {
    document.cookie = `${name}=${value}; max-age=${maxAge}; expires=${maxAge}; path=/`
    console.log('setCookie', document.cookie.split('; '))
}

export const removeCookie = (name: string) => {
    document.cookie = `${name}=; max-age=-1; expires=-1; path=/`
    console.log('removeCookie', document.cookie.split('; '))
}

export const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ')
    const searched = cookies.find(c => c.startsWith(name))
    if (searched) return searched.split('=')[1]
    return null
}