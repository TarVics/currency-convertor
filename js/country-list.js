let country_list = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "NOK": "BV",
    "BWP": "BW",
    "BYN": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CYP": "CY",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "ECS": "EC",
    "EEK": "EE",
    "EGP": "EG",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LTL": "LT",
    "LVL": "LV",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MTL": "MT",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "XPF": "NC",
    "NGN": "NG",
    "NIO": "NI",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SKK": "SK",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "STD": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW"
}

const flag_euro = '&#x1F1EA;&#x1F1FA;';
const flag_xdr = '&#x1F4DC;';
const flag_money = '&#x1F4B0;';

const country_flags = [{
"code":"AC","name":"Ascension Island","flag":"&#x1F1E6;&#x1F1E8;"},{
"code":"AD","name":"Andorra","flag":"&#x1F1E6;&#x1F1E9"},{
"code":"AE","name":"United Arab Emirates","flag":"&#x1F1E6;&#x1F1EA"},{
"code":"AF","name":"Afghanistan","flag":"&#x1F1E6;&#x1F1EB"},{
"code":"AG","name":"Antigua & Barbuda","flag":"&#x1F1E6;&#x1F1EC"},{
"code":"AI","name":"Anguilla","flag":"&#x1F1E6;&#x1F1EE"},{
"code":"AL","name":"Albania","flag":"&#x1F1E6;&#x1F1F1"},{
"code":"AM","name":"Armenia","flag":"&#x1F1E6;&#x1F1F2"},{
"code":"AO","name":"Angola","flag":"&#x1F1E6;&#x1F1F4"},{
"code":"AQ","name":"Antarctica","flag":"&#x1F1E6;&#x1F1F6"},{
"code":"AR","name":"Argentina","flag":"&#x1F1E6;&#x1F1F7"},{
"code":"AS","name":"American Samoa","flag":"&#x1F1E6;&#x1F1F8"},{
"code":"AT","name":"Austria","flag":"&#x1F1E6;&#x1F1F9"},{
"code":"AU","name":"Australia","flag":"&#x1F1E6;&#x1F1FA"},{
"code":"AW","name":"Aruba","flag":"&#x1F1E6;&#x1F1FC"},{
"code":"AX","name":"Åland Islands","flag":"&#x1F1E6;&#x1F1FD"},{
"code":"AZ","name":"Azerbaijan","flag":"&#x1F1E6;&#x1F1FF"},{
"code":"BA","name":"Bosnia & Herzegovina","flag":"&#x1F1E7;&#x1F1E6"},{
"code":"BB","name":"Barbados","flag":"&#x1F1E7;&#x1F1E7"},{
"code":"BD","name":"Bangladesh","flag":"&#x1F1E7;&#x1F1E9"},{
"code":"BE","name":"Belgium","flag":"&#x1F1E7;&#x1F1EA"},{
"code":"BF","name":"Burkina Faso","flag":"&#x1F1E7;&#x1F1EB"},{
"code":"BG","name":"Bulgaria","flag":"&#x1F1E7;&#x1F1EC"},{
"code":"BH","name":"Bahrain","flag":"&#x1F1E7;&#x1F1ED"},{
"code":"BI","name":"Burundi","flag":"&#x1F1E7;&#x1F1EE"},{
"code":"BJ","name":"Benin","flag":"&#x1F1E7;&#x1F1EF"},{
"code":"BL","name":"St. Barthélemy","flag":"&#x1F1E7;&#x1F1F1"},{
"code":"BM","name":"Bermuda","flag":"&#x1F1E7;&#x1F1F2"},{
"code":"BN","name":"Brunei","flag":"&#x1F1E7;&#x1F1F3"},{
"code":"BO","name":"Bolivia","flag":"&#x1F1E7;&#x1F1F4"},{
"code":"BQ","name":"Caribbean Netherlands","flag":"&#x1F1E7;&#x1F1F6"},{
"code":"BR","name":"Brazil","flag":"&#x1F1E7;&#x1F1F7"},{
"code":"BS","name":"Bahamas","flag":"&#x1F1E7;&#x1F1F8"},{
"code":"BT","name":"Bhutan","flag":"&#x1F1E7;&#x1F1F9"},{
"code":"BV","name":"Bouvet Island","flag":"&#x1F1E7;&#x1F1FB"},{
"code":"BW","name":"Botswana","flag":"&#x1F1E7;&#x1F1FC"},{
"code":"BY","name":"Belarus","flag":"&#x1F1E7;&#x1F1FE"},{
"code":"BZ","name":"Belize","flag":"&#x1F1E7;&#x1F1FF"},{
"code":"CA","name":"Canada","flag":"&#x1F1E8;&#x1F1E6"},{
"code":"CC","name":"Cocos (Keeling) Islands","flag":"&#x1F1E8;&#x1F1E8"},{
"code":"CD","name":"Congo - Kinshasa","flag":"&#x1F1E8;&#x1F1E9"},{
"code":"CF","name":"Central African Republic","flag":"&#x1F1E8;&#x1F1EB"},{
"code":"CG","name":"Congo - Brazzaville","flag":"&#x1F1E8;&#x1F1EC"},{
"code":"CH","name":"Switzerland","flag":"&#x1F1E8;&#x1F1ED"},{
"code":"CI","name":"Côte d’Ivoire","flag":"&#x1F1E8;&#x1F1EE"},{
"code":"CK","name":"Cook Islands","flag":"&#x1F1E8;&#x1F1F0"},{
"code":"CL","name":"Chile","flag":"&#x1F1E8;&#x1F1F1"},{
"code":"CM","name":"Cameroon","flag":"&#x1F1E8;&#x1F1F2"},{
"code":"CN","name":"China","flag":"&#x1F1E8;&#x1F1F3"},{
"code":"CO","name":"Colombia","flag":"&#x1F1E8;&#x1F1F4"},{
"code":"CP","name":"Clipperton Island","flag":"&#x1F1E8;&#x1F1F5"},{
"code":"CR","name":"Costa Rica","flag":"&#x1F1E8;&#x1F1F7"},{
"code":"CU","name":"Cuba","flag":"&#x1F1E8;&#x1F1FA"},{
"code":"CV","name":"Cape Verde","flag":"&#x1F1E8;&#x1F1FB"},{
"code":"CW","name":"Curaçao","flag":"&#x1F1E8;&#x1F1FC"},{
"code":"CX","name":"Christmas Island","flag":"&#x1F1E8;&#x1F1FD"},{
"code":"CY","name":"Cyprus","flag":"&#x1F1E8;&#x1F1FE"},{
"code":"CZ","name":"Czech Republic","flag":"&#x1F1E8;&#x1F1FF"},{
"code":"DE","name":"Germany","flag":"&#x1F1E9;&#x1F1EA"},{
"code":"DG","name":"Diego Garcia","flag":"&#x1F1E9;&#x1F1EC"},{
"code":"DJ","name":"Djibouti","flag":"&#x1F1E9;&#x1F1EF"},{
"code":"DK","name":"Denmark","flag":"&#x1F1E9;&#x1F1F0"},{
"code":"DM","name":"Dominica","flag":"&#x1F1E9;&#x1F1F2"},{
"code":"DO","name":"Dominican Republic","flag":"&#x1F1E9;&#x1F1F4"},{
"code":"DZ","name":"Algeria","flag":"&#x1F1E9;&#x1F1FF"},{
"code":"EA","name":"Ceuta & Melilla","flag":"&#x1F1EA;&#x1F1E6"},{
"code":"EC","name":"Ecuador","flag":"&#x1F1EA;&#x1F1E8"},{
"code":"EE","name":"Estonia","flag":"&#x1F1EA;&#x1F1EA"},{
"code":"EG","name":"Egypt","flag":"&#x1F1EA;&#x1F1EC"},{
"code":"EH","name":"Western Sahara","flag":"&#x1F1EA;&#x1F1ED"},{
"code":"ER","name":"Eritrea","flag":"&#x1F1EA;&#x1F1F7"},{
"code":"ES","name":"Spain","flag":"&#x1F1EA;&#x1F1F8"},{
"code":"ET","name":"Ethiopia","flag":"&#x1F1EA;&#x1F1F9"},{
"code":"EU","name":"European Union","flag":"&#x1F1EA;&#x1F1FA"},{
"code":"FI","name":"Finland","flag":"&#x1F1EB;&#x1F1EE"},{
"code":"FJ","name":"Fiji","flag":"&#x1F1EB;&#x1F1EF"},{
"code":"FK","name":"Falkland Islands","flag":"&#x1F1EB;&#x1F1F0"},{
"code":"FM","name":"Micronesia","flag":"&#x1F1EB;&#x1F1F2"},{
"code":"FO","name":"Faroe Islands","flag":"&#x1F1EB;&#x1F1F4"},{
"code":"FR","name":"France","flag":"&#x1F1EB;&#x1F1F7"},{
"code":"GA","name":"Gabon","flag":"&#x1F1EC;&#x1F1E6"},{
"code":"GB","name":"United Kingdom","flag":"&#x1F1EC;&#x1F1E7"},{
"code":"GD","name":"Grenada","flag":"&#x1F1EC;&#x1F1E9"},{
"code":"GE","name":"Georgia","flag":"&#x1F1EC;&#x1F1EA"},{
"code":"GF","name":"French Guiana","flag":"&#x1F1EC;&#x1F1EB"},{
"code":"GG","name":"Guernsey","flag":"&#x1F1EC;&#x1F1EC"},{
"code":"GH","name":"Ghana","flag":"&#x1F1EC;&#x1F1ED"},{
"code":"GI","name":"Gibraltar","flag":"&#x1F1EC;&#x1F1EE"},{
"code":"GL","name":"Greenland","flag":"&#x1F1EC;&#x1F1F1"},{
"code":"GM","name":"Gambia","flag":"&#x1F1EC;&#x1F1F2"},{
"code":"GN","name":"Guinea","flag":"&#x1F1EC;&#x1F1F3"},{
"code":"GP","name":"Guadeloupe","flag":"&#x1F1EC;&#x1F1F5"},{
"code":"GQ","name":"Equatorial Guinea","flag":"&#x1F1EC;&#x1F1F6"},{
"code":"GR","name":"Greece","flag":"&#x1F1EC;&#x1F1F7"},{
"code":"GS","name":"South Georgia & South Sandwich Islands","flag":"&#x1F1EC;&#x1F1F8"},{
"code":"GT","name":"Guatemala","flag":"&#x1F1EC;&#x1F1F9"},{
"code":"GU","name":"Guam","flag":"&#x1F1EC;&#x1F1FA"},{
"code":"GW","name":"Guinea-Bissau","flag":"&#x1F1EC;&#x1F1FC"},{
"code":"GY","name":"Guyana","flag":"&#x1F1EC;&#x1F1FE"},{
"code":"HK","name":"Hong Kong SAR China","flag":"&#x1F1ED;&#x1F1F0"},{
"code":"HM","name":"Heard & McDonald Islands","flag":"&#x1F1ED;&#x1F1F2"},{
"code":"HN","name":"Honduras","flag":"&#x1F1ED;&#x1F1F3"},{
"code":"HR","name":"Croatia","flag":"&#x1F1ED;&#x1F1F7"},{
"code":"HT","name":"Haiti","flag":"&#x1F1ED;&#x1F1F9"},{
"code":"HU","name":"Hungary","flag":"&#x1F1ED;&#x1F1FA"},{
"code":"IC","name":"Canary Islands","flag":"&#x1F1EE;&#x1F1E8"},{
"code":"ID","name":"Indonesia","flag":"&#x1F1EE;&#x1F1E9"},{
"code":"IE","name":"Ireland","flag":"&#x1F1EE;&#x1F1EA"},{
"code":"IL","name":"Israel","flag":"&#x1F1EE;&#x1F1F1"},{
"code":"IM","name":"Isle of Man","flag":"&#x1F1EE;&#x1F1F2"},{
"code":"IN","name":"India","flag":"&#x1F1EE;&#x1F1F3"},{
"code":"IO","name":"British Indian Ocean Territory","flag":"&#x1F1EE;&#x1F1F4"},{
"code":"IQ","name":"Iraq","flag":"&#x1F1EE;&#x1F1F6"},{
"code":"IR","name":"Iran","flag":"&#x1F1EE;&#x1F1F7"},{
"code":"IS","name":"Iceland","flag":"&#x1F1EE;&#x1F1F8"},{
"code":"IT","name":"Italy","flag":"&#x1F1EE;&#x1F1F9"},{
"code":"JE","name":"Jersey","flag":"&#x1F1EF;&#x1F1EA"},{
"code":"JM","name":"Jamaica","flag":"&#x1F1EF;&#x1F1F2"},{
"code":"JO","name":"Jordan","flag":"&#x1F1EF;&#x1F1F4"},{
"code":"JP","name":"Japan","flag":"&#x1F1EF;&#x1F1F5"},{
"code":"KE","name":"Kenya","flag":"&#x1F1F0;&#x1F1EA"},{
"code":"KG","name":"Kyrgyzstan","flag":"&#x1F1F0;&#x1F1EC"},{
"code":"KH","name":"Cambodia","flag":"&#x1F1F0;&#x1F1ED"},{
"code":"KI","name":"Kiribati","flag":"&#x1F1F0;&#x1F1EE"},{
"code":"KM","name":"Comoros","flag":"&#x1F1F0;&#x1F1F2"},{
"code":"KN","name":"St. Kitts & Nevis","flag":"&#x1F1F0;&#x1F1F3"},{
"code":"KP","name":"North Korea","flag":"&#x1F1F0;&#x1F1F5"},{
"code":"KR","name":"South Korea","flag":"&#x1F1F0;&#x1F1F7"},{
"code":"KW","name":"Kuwait","flag":"&#x1F1F0;&#x1F1FC"},{
"code":"KY","name":"Cayman Islands","flag":"&#x1F1F0;&#x1F1FE"},{
"code":"KZ","name":"Kazakhstan","flag":"&#x1F1F0;&#x1F1FF"},{
"code":"LA","name":"Laos","flag":"&#x1F1F1;&#x1F1E6"},{
"code":"LB","name":"Lebanon","flag":"&#x1F1F1;&#x1F1E7"},{
"code":"LC","name":"St. Lucia","flag":"&#x1F1F1;&#x1F1E8"},{
"code":"LI","name":"Liechtenstein","flag":"&#x1F1F1;&#x1F1EE"},{
"code":"LK","name":"Sri Lanka","flag":"&#x1F1F1;&#x1F1F0"},{
"code":"LR","name":"Liberia","flag":"&#x1F1F1;&#x1F1F7"},{
"code":"LS","name":"Lesotho","flag":"&#x1F1F1;&#x1F1F8"},{
"code":"LT","name":"Lithuania","flag":"&#x1F1F1;&#x1F1F9"},{
"code":"LU","name":"Luxembourg","flag":"&#x1F1F1;&#x1F1FA"},{
"code":"LV","name":"Latvia","flag":"&#x1F1F1;&#x1F1FB"},{
"code":"LY","name":"Libya","flag":"&#x1F1F1;&#x1F1FE"},{
"code":"MA","name":"Morocco","flag":"&#x1F1F2;&#x1F1E6"},{
"code":"MC","name":"Monaco","flag":"&#x1F1F2;&#x1F1E8"},{
"code":"MD","name":"Moldova","flag":"&#x1F1F2;&#x1F1E9"},{
"code":"ME","name":"Montenegro","flag":"&#x1F1F2;&#x1F1EA"},{
"code":"MF","name":"St. Martin","flag":"&#x1F1F2;&#x1F1EB"},{
"code":"MG","name":"Madagascar","flag":"&#x1F1F2;&#x1F1EC"},{
"code":"MH","name":"Marshall Islands","flag":"&#x1F1F2;&#x1F1ED"},{
"code":"MK","name":"Macedonia","flag":"&#x1F1F2;&#x1F1F0"},{
"code":"ML","name":"Mali","flag":"&#x1F1F2;&#x1F1F1"},{
"code":"MM","name":"Myanmar (Burma)","flag":"&#x1F1F2;&#x1F1F2"},{
"code":"MN","name":"Mongolia","flag":"&#x1F1F2;&#x1F1F3"},{
"code":"MO","name":"Macau SAR China","flag":"&#x1F1F2;&#x1F1F4"},{
"code":"MP","name":"Northern Mariana Islands","flag":"&#x1F1F2;&#x1F1F5"},{
"code":"MQ","name":"Martinique","flag":"&#x1F1F2;&#x1F1F6"},{
"code":"MR","name":"Mauritania","flag":"&#x1F1F2;&#x1F1F7"},{
"code":"MS","name":"Montserrat","flag":"&#x1F1F2;&#x1F1F8"},{
"code":"MT","name":"Malta","flag":"&#x1F1F2;&#x1F1F9"},{
"code":"MU","name":"Mauritius","flag":"&#x1F1F2;&#x1F1FA"},{
"code":"MV","name":"Maldives","flag":"&#x1F1F2;&#x1F1FB"},{
"code":"MW","name":"Malawi","flag":"&#x1F1F2;&#x1F1FC"},{
"code":"MX","name":"Mexico","flag":"&#x1F1F2;&#x1F1FD"},{
"code":"MY","name":"Malaysia","flag":"&#x1F1F2;&#x1F1FE"},{
"code":"MZ","name":"Mozambique","flag":"&#x1F1F2;&#x1F1FF"},{
"code":"NA","name":"Namibia","flag":"&#x1F1F3;&#x1F1E6"},{
"code":"NC","name":"New Caledonia","flag":"&#x1F1F3;&#x1F1E8"},{
"code":"NE","name":"Niger","flag":"&#x1F1F3;&#x1F1EA"},{
"code":"NF","name":"Norfolk Island","flag":"&#x1F1F3;&#x1F1EB"},{
"code":"NG","name":"Nigeria","flag":"&#x1F1F3;&#x1F1EC"},{
"code":"NI","name":"Nicaragua","flag":"&#x1F1F3;&#x1F1EE"},{
"code":"NL","name":"Netherlands","flag":"&#x1F1F3;&#x1F1F1"},{
"code":"NO","name":"Norway","flag":"&#x1F1F3;&#x1F1F4"},{
"code":"NP","name":"Nepal","flag":"&#x1F1F3;&#x1F1F5"},{
"code":"NR","name":"Nauru","flag":"&#x1F1F3;&#x1F1F7"},{
"code":"NU","name":"Niue","flag":"&#x1F1F3;&#x1F1FA"},{
"code":"NZ","name":"New Zealand","flag":"&#x1F1F3;&#x1F1FF"},{
"code":"OM","name":"Oman","flag":"&#x1F1F4;&#x1F1F2"},{
"code":"PA","name":"Panama","flag":"&#x1F1F5;&#x1F1E6"},{
"code":"PE","name":"Peru","flag":"&#x1F1F5;&#x1F1EA"},{
"code":"PF","name":"French Polynesia","flag":"&#x1F1F5;&#x1F1EB"},{
"code":"PG","name":"Papua New Guinea","flag":"&#x1F1F5;&#x1F1EC"},{
"code":"PH","name":"Philippines","flag":"&#x1F1F5;&#x1F1ED"},{
"code":"PK","name":"Pakistan","flag":"&#x1F1F5;&#x1F1F0"},{
"code":"PL","name":"Poland","flag":"&#x1F1F5;&#x1F1F1"},{
"code":"PM","name":"St. Pierre & Miquelon","flag":"&#x1F1F5;&#x1F1F2"},{
"code":"PN","name":"Pitcairn Islands","flag":"&#x1F1F5;&#x1F1F3"},{
"code":"PR","name":"Puerto Rico","flag":"&#x1F1F5;&#x1F1F7"},{
"code":"PS","name":"Palestinian Territories","flag":"&#x1F1F5;&#x1F1F8"},{
"code":"PT","name":"Portugal","flag":"&#x1F1F5;&#x1F1F9"},{
"code":"PW","name":"Palau","flag":"&#x1F1F5;&#x1F1FC"},{
"code":"PY","name":"Paraguay","flag":"&#x1F1F5;&#x1F1FE"},{
"code":"QA","name":"Qatar","flag":"&#x1F1F6;&#x1F1E6"},{
"code":"RE","name":"Réunion","flag":"&#x1F1F7;&#x1F1EA"},{
"code":"RO","name":"Romania","flag":"&#x1F1F7;&#x1F1F4"},{
"code":"RS","name":"Serbia","flag":"&#x1F1F7;&#x1F1F8"},{
"code":"RU","name":"Russia","flag":"&#x1F1F7;&#x1F1FA"},{
"code":"RW","name":"Rwanda","flag":"&#x1F1F7;&#x1F1FC"},{
"code":"SA","name":"Saudi Arabia","flag":"&#x1F1F8;&#x1F1E6"},{
"code":"SB","name":"Solomon Islands","flag":"&#x1F1F8;&#x1F1E7"},{
"code":"SC","name":"Seychelles","flag":"&#x1F1F8;&#x1F1E8"},{
"code":"SD","name":"Sudan","flag":"&#x1F1F8;&#x1F1E9"},{
"code":"SE","name":"Sweden","flag":"&#x1F1F8;&#x1F1EA"},{
"code":"SG","name":"Singapore","flag":"&#x1F1F8;&#x1F1EC"},{
"code":"SH","name":"St. Helena","flag":"&#x1F1F8;&#x1F1ED"},{
"code":"SI","name":"Slovenia","flag":"&#x1F1F8;&#x1F1EE"},{
"code":"SJ","name":"Svalbard & Jan Mayen","flag":"&#x1F1F8;&#x1F1EF"},{
"code":"SK","name":"Slovakia","flag":"&#x1F1F8;&#x1F1F0"},{
"code":"SL","name":"Sierra Leone","flag":"&#x1F1F8;&#x1F1F1"},{
"code":"SM","name":"San Marino","flag":"&#x1F1F8;&#x1F1F2"},{
"code":"SN","name":"Senegal","flag":"&#x1F1F8;&#x1F1F3"},{
"code":"SO","name":"Somalia","flag":"&#x1F1F8;&#x1F1F4"},{
"code":"SR","name":"Suriname","flag":"&#x1F1F8;&#x1F1F7"},{
"code":"SS","name":"South Sudan","flag":"&#x1F1F8;&#x1F1F8"},{
"code":"ST","name":"São Tomé & Príncipe","flag":"&#x1F1F8;&#x1F1F9"},{
"code":"SV","name":"El Salvador","flag":"&#x1F1F8;&#x1F1FB"},{
"code":"SX","name":"Sint Maarten","flag":"&#x1F1F8;&#x1F1FD"},{
"code":"SY","name":"Syria","flag":"&#x1F1F8;&#x1F1FE"},{
"code":"SZ","name":"Swaziland","flag":"&#x1F1F8;&#x1F1FF"},{
"code":"TA","name":"Tristan da Cunha","flag":"&#x1F1F9;&#x1F1E6"},{
"code":"TC","name":"Turks & Caicos Islands","flag":"&#x1F1F9;&#x1F1E8"},{
"code":"TD","name":"Chad","flag":"&#x1F1F9;&#x1F1E9"},{
"code":"TF","name":"French Southern Territories","flag":"&#x1F1F9;&#x1F1EB"},{
"code":"TG","name":"Togo","flag":"&#x1F1F9;&#x1F1EC"},{
"code":"TH","name":"Thailand","flag":"&#x1F1F9;&#x1F1ED"},{
"code":"TJ","name":"Tajikistan","flag":"&#x1F1F9;&#x1F1EF"},{
"code":"TK","name":"Tokelau","flag":"&#x1F1F9;&#x1F1F0"},{
"code":"TL","name":"Timor-Leste","flag":"&#x1F1F9;&#x1F1F1"},{
"code":"TM","name":"Turkmenistan","flag":"&#x1F1F9;&#x1F1F2"},{
"code":"TN","name":"Tunisia","flag":"&#x1F1F9;&#x1F1F3"},{
"code":"TO","name":"Tonga","flag":"&#x1F1F9;&#x1F1F4"},{
"code":"TR","name":"Turkey","flag":"&#x1F1F9;&#x1F1F7"},{
"code":"TT","name":"Trinidad & Tobago","flag":"&#x1F1F9;&#x1F1F9"},{
"code":"TV","name":"Tuvalu","flag":"&#x1F1F9;&#x1F1FB"},{
"code":"TW","name":"Taiwan","flag":"&#x1F1F9;&#x1F1FC"},{
"code":"TZ","name":"Tanzania","flag":"&#x1F1F9;&#x1F1FF"},{
"code":"UA","name":"Ukraine","flag":"&#x1F1FA;&#x1F1E6"},{
"code":"UG","name":"Uganda","flag":"&#x1F1FA;&#x1F1EC"},{
"code":"UM","name":"U.S. Outlying Islands","flag":"&#x1F1FA;&#x1F1F2"},{
"code":"US","name":"United States","flag":"&#x1F1FA;&#x1F1F8"},{
"code":"UY","name":"Uruguay","flag":"&#x1F1FA;&#x1F1FE"},{
"code":"UZ","name":"Uzbekistan","flag":"&#x1F1FA;&#x1F1FF"},{
"code":"VA","name":"Vatican City","flag":"&#x1F1FB;&#x1F1E6"},{
"code":"VC","name":"St. Vincent & Grenadines","flag":"&#x1F1FB;&#x1F1E8"},{
"code":"VE","name":"Venezuela","flag":"&#x1F1FB;&#x1F1EA"},{
"code":"VG","name":"British Virgin Islands","flag":"&#x1F1FB;&#x1F1EC"},{
"code":"VI","name":"U.S. Virgin Islands","flag":"&#x1F1FB;&#x1F1EE"},{
"code":"VN","name":"Vietnam","flag":"&#x1F1FB;&#x1F1F3"},{
"code":"VU","name":"Vanuatu","flag":"&#x1F1FB;&#x1F1FA"},{
"code":"WF","name":"Wallis & Futuna","flag":"&#x1F1FC;&#x1F1EB"},{
"code":"WS","name":"Samoa","flag":"&#x1F1FC;&#x1F1F8"},{
"code":"XK","name":"Kosovo","flag":"&#x1F1FD;&#x1F1F0"},{
"code":"YE","name":"Yemen","flag":"&#x1F1FE;&#x1F1EA"},{
"code":"YT","name":"Mayotte","flag":"&#x1F1FE;&#x1F1F9"},{
"code":"ZA","name":"South Africa","flag":"&#x1F1FF;&#x1F1E6"},{
"code":"ZM","name":"Zambia","flag":"&#x1F1FF;&#x1F1F2"},{
"code":"ZW","name":"Zimbabwe","flag":"&#x1F1FF;&#x1F1FC;"}]
