/* Funzione per la conversione tabellare 
   dei caratteri speciali html da/a
   tratto da: https://jsfiddle.net/BideoWego/muuvvof8/
*/   
var HtmlSpecialChars = function() {};

HtmlSpecialChars.map = {
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
    " ": "&nbsp;",
    "Â¡": "&iexcl;",
    "Â¢": "&cent;",
    "Â£": "&pound;",
    "Â¤": "&curren;",
    "Â¥": "&yen;",
    "Â¦": "&brvbar;",
    "Â§": "&sect;",
    "Â¨": "&uml;",
    "Â©": "&copy;",
    "Âª": "&ordf;",
    "Â«": "&laquo;",
    "Â¬": "&not;",
    "Â®": "&reg;",
    "Â¯": "&macr;",
    "Â°": "&deg;",
    "Â±": "&plusmn;",
    "Â²": "&sup2;",
    "Â³": "&sup3;",
    "Â´": "&acute;",
    "Âµ": "&micro;",
    "Â¶": "&para;",
    "Â·": "&middot;",
    "Â¸": "&cedil;",
    "Â¹": "&sup1;",
    "Âº": "&ordm;",
    "Â»": "&raquo;",
    "Â¼": "&frac14;",
    "Â½": "&frac12;",
    "Â¾": "&frac34;",
    "Â¿": "&iquest;",
    "Ã€": "&Agrave;",
    "Ã": "&Aacute;",
    "Ã‚": "&Acirc;",
    "Ãƒ": "&Atilde;",
    "Ã„": "&Auml;",
    "Ã…": "&Aring;",
    "Ã†": "&AElig;",
    "Ã‡": "&Ccedil;",
    "Ãˆ": "&Egrave;",
    "Ã‰": "&Eacute;",
    "ÃŠ": "&Ecirc;",
    "Ã‹": "&Euml;",
    "ÃŒ": "&Igrave;",
    "Ã": "&Iacute;",
    "ÃŽ": "&Icirc;",
    "Ã": "&Iuml;",
    "Ã": "&ETH;",
    "Ã‘": "&Ntilde;",
    "Ã’": "&Ograve;",
    "Ã“": "&Oacute;",
    "Ã”": "&Ocirc;",
    "Ã•": "&Otilde;",
    "Ã–": "&Ouml;",
    "Ã—": "&times;",
    "Ã˜": "&Oslash;",
    "Ã™": "&Ugrave;",
    "Ãš": "&Uacute;",
    "Ã›": "&Ucirc;",
    "Ãœ": "&Uuml;",
    "Ã": "&Yacute;",
    "Ãž": "&THORN;",
    "ÃŸ": "&szlig;",
    "Ã ": "&agrave;",
    "Ã¡": "&aacute;",
    "Ã¢": "&acirc;",
    "Ã£": "&atilde;",
    "Ã¤": "&auml;",
    "Ã¥": "&aring;",
    "Ã¦": "&aelig;",
    "Ã§": "&ccedil;",
    "Ã¨": "&egrave;",
    "Ã©": "&eacute;",
    "Ãª": "&ecirc;",
    "Ã«": "&euml;",
    "Ã¬": "&igrave;",
    "Ã­": "&iacute;",
    "Ã®": "&icirc;",
    "Ã¯": "&iuml;",
    "Ã°": "&eth;",
    "Ã±": "&ntilde;",
    "Ã²": "&ograve;",
    "Ã³": "&oacute;",
    "Ã´": "&ocirc;",
    "Ãµ": "&otilde;",
    "Ã¶": "&ouml;",
    "Ã·": "&divide;",
    "Ã¸": "&oslash;",
    "Ã¹": "&ugrave;",
    "Ãº": "&uacute;",
    "Ã»": "&ucirc;",
    "Ã¼": "&uuml;",
    "Ã½": "&yacute;",
    "Ã¾": "&thorn;",
    "Ã¿": "&yuml;",
    "Å’": "&OElig;",
    "Å“": "&oelig;",
    "Å ": "&Scaron;",
    "Å¡": "&scaron;",
    "Å¸": "&Yuml;",
    "Æ’": "&fnof;",
    "Ë†": "&circ;",
    "Ëœ": "&tilde;",
    "Î‘": "&Alpha;",
    "Î’": "&Beta;",
    "Î“": "&Gamma;",
    "Î”": "&Delta;",
    "Î•": "&Epsilon;",
    "Î–": "&Zeta;",
    "Î—": "&Eta;",
    "Î˜": "&Theta;",
    "Î™": "&Iota;",
    "Îš": "&Kappa;",
    "Î›": "&Lambda;",
    "Îœ": "&Mu;",
    "Î": "&Nu;",
    "Îž": "&Xi;",
    "ÎŸ": "&Omicron;",
    "Î ": "&Pi;",
    "Î¡": "&Rho;",
    "Î£": "&Sigma;",
    "Î¤": "&Tau;",
    "Î¥": "&Upsilon;",
    "Î¦": "&Phi;",
    "Î§": "&Chi;",
    "Î¨": "&Psi;",
    "Î©": "&Omega;",
    "Î±": "&alpha;",
    "Î²": "&beta;",
    "Î³": "&gamma;",
    "Î´": "&delta;",
    "Îµ": "&epsilon;",
    "Î¶": "&zeta;",
    "Î·": "&eta;",
    "Î¸": "&theta;",
    "Î¹": "&iota;",
    "Îº": "&kappa;",
    "Î»": "&lambda;",
    "Î¼": "&mu;",
    "Î½": "&nu;",
    "Î¾": "&xi;",
    "Î¿": "&omicron;",
    "Ï€": "&pi;",
    "Ï": "&rho;",
    "Ï‚": "&sigmaf;",
    "Ïƒ": "&sigma;",
    "Ï„": "&tau;",
    "Ï…": "&upsilon;",
    "Ï†": "&phi;",
    "Ï‡": "&chi;",
    "Ïˆ": "&psi;",
    "Ï‰": "&omega;",
    "Ï‘": "&thetasym;",
    "Ï’": "&Upsih;",
    "Ï–": "&piv;",
    "â€“": "&ndash;",
    "â€”": "&mdash;",
    "â€˜": "&lsquo;",
    "â€™": "&rsquo;",
    "â€š": "&sbquo;",
    "â€œ": "&ldquo;",
    "â€": "&rdquo;",
    "â€ž": "&bdquo;",
    "â€ ": "&dagger;",
    "â€¡": "&Dagger;",
    "â€¢": "&bull;",
    "â€¦": "&hellip;",
    "â€°": "&permil;",
    "â€²": "&prime;",
    "â€³": "&Prime;",
    "â€¹": "&lsaquo;",
    "â€º": "&rsaquo;",
    "â€¾": "&oline;",
    "â„": "&frasl;",
    "â‚¬": "&euro;",
    "â„‘": "&image;",
    "â„˜": "&weierp;",
    "â„œ": "&real;",
    "â„¢": "&trade;",
    "â„µ": "&alefsym;",
    "â†": "&larr;",
    "â†‘": "&uarr;",
    "â†’": "&rarr;",
    "â†“": "&darr;",
    "â†”": "&harr;",
    "â†µ": "&crarr;",
    "â‡": "&lArr;",
    "â‡‘": "&UArr;",
    "â‡’": "&rArr;",
    "â‡“": "&dArr;",
    "â‡”": "&hArr;",
    "âˆ€": "&forall;",
    "âˆ‚": "&part;",
    "âˆƒ": "&exist;",
    "âˆ…": "&empty;",
    "âˆ‡": "&nabla;",
    "âˆˆ": "&isin;",
    "âˆ‰": "&notin;",
    "âˆ‹": "&ni;",
    "âˆ": "&prod;",
    "âˆ‘": "&sum;",
    "âˆ’": "&minus;",
    "âˆ—": "&lowast;",
    "âˆš": "&radic;",
    "âˆ": "&prop;",
    "âˆž": "&infin;",
    "âˆ ": "&ang;",
    "âˆ§": "&and;",
    "âˆ¨": "&or;",
    "âˆ©": "&cap;",
    "âˆª": "&cup;",
    "âˆ«": "&int;",
    "âˆ´": "&there4;",
    "âˆ¼": "&sim;",
    "â‰…": "&cong;",
    "â‰ˆ": "&asymp;",
    "â‰ ": "&ne;",
    "â‰¡": "&equiv;",
    "â‰¤": "&le;",
    "â‰¥": "&ge;",
    "âŠ‚": "&sub;",
    "âŠƒ": "&sup;",
    "âŠ„": "&nsub;",
    "âŠ†": "&sube;",
    "âŠ‡": "&supe;",
    "âŠ•": "&oplus;",
    "âŠ—": "&otimes;",
    "âŠ¥": "&perp;",
    "â‹…": "&sdot;",
    "âŒˆ": "&lceil;",
    "âŒ‰": "&rceil;",
    "âŒŠ": "&lfloor;",
    "âŒ‹": "&rfloor;",
    "âŸ¨": "&lang;",
    "âŸ©": "&rang;",
    "â—Š": "&loz;",
    "â™ ": "&spades;",
    "â™£": "&clubs;",
    "â™¥": "&hearts;",
    "â™¦": "&diams;"
  };

  export function HtmlSpecialChars_decode(string) {
    var entityMap = HtmlSpecialChars.map;
    for (var key in entityMap) {
        var entity = entityMap[key];
        var regex = new RegExp(entity, 'g');
        string = string.replace(regex, key);
    }
    string = string.replace(/&quot;/g, '"');
    string = string.replace(/&amp;/g, '&');
    return string;
  }
  
  export function HtmlSpecialChars_encode(string) {
    var entityMap = HtmlSpecialChars.map;
    string = string.replace(/&/g, '&amp;');
    string = string.replace(/"/g, '&quot;');
    for (var key in entityMap) {
        var entity = entityMap[key];
        var regex = new RegExp(key, 'g');
        string = string.replace(regex, entity);
    }
    return string;
  }  