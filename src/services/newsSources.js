
const articleCount = 12;

const arubaNative = `https://arubanative.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const noticiaCla = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.noticiacla.com%2Frss`;//-
const awe24 = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.awe24.com%2Frss`;
const eArubianoNews = `https://earubianonews.com/wp-json/wp/v2/posts?_embed&per_page=12`;
const aweMainta = `https://awemainta.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const _24ora = `https://24ora.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const boletinExtra = `https://boletinextra.com/wp-json/wp/v2/posts?_embed&per_page=12`;
const masNoticia = `https://www.masnoticia.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const diario = `https://www.diario.aw/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const focus = `https://focus.aw/index.php/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const visitAruba =`https://www.visitaruba.com/blog/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const bonDia = `https://www.bondia.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const sports = `https://www.297sports.com/wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const solo = `https://solodipueblo.com//wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;//-
const xclusivo = `https://xclusivomagazine.com//wp-json/wp/v2/posts?_embed&per_page=${articleCount}`;


export const services = {
    arubaNative,
    aweMainta,
    _24ora,
    masNoticia,
    diario,
    focus,
    visitAruba,
    bonDia,
    sports,
    solo,
    eArubianoNews,
    boletinExtra,
    awe24,
    noticiaCla,
    xclusivo
}
export default services;