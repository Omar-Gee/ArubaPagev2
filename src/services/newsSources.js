
const articleCount = 12;

export const arubaNative = `https://arubanative.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const noticiaCla = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.noticiacla.com%2Frss`;//-
export const awe24 = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.awe24.com%2Frss`;
export const eArubianoNews = `https://earubianonews.com/wp-json/wp/v2/posts`;
export const aweMainta = `https://awemainta.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const _24ora = `https://24ora.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
//export const boletinExtra = `https://boletinextra.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;
export const masNoticia = `https://www.masnoticia.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const diario = `https://www.diario.aw/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const focus = `https://focus.aw/index.php/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const batiBleki =`https://www.visitaruba.com/blog/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const bonDia = `https://www.bondia.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const sports = `http://www.297sports.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
export const solo = `http://solodipueblo.com//wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-


const services = {
    arubaNative,aweMainta,_24ora,masNoticia,diario,focus,batiBleki,bonDia,sports,solo, eArubianoNews //,awe24,noticiaCla
}
export default services;