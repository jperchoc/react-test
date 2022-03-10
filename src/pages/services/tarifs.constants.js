export const TYPES = {
    cat: "chat",
    dog: "chien"
};
export const SIZES = {
    mpc: "mpc",
    mpl: "mpl",
    ppc: "ppc",
    ppl: "ppl",
    moyen: "moyen",
    grand:  "grand"
};
export const FORMULES = {
    bbtp: "bbtp",
    tonteCourte: "tonteCourte",
    coupeCiseaux: "coupeCiseaux",
    epilation: "epilation",
};
export const PRICES = {
    cat: {
        default: {price: 30, hourly: true},
        zen: {price: 20}
    },
    mpc: {
        bbtp: {price: 30, hourly: false},
        tonteCourte:  {price: 40, hourly: false},
        coupeCiseaux:  {price: 42, hourly: false},
        epilation:  {price: 30, hourly: true}
    },
    mpl: {
        bbtp: {price: 30, hourly: true},
        tonteCourte:  {price: 40, hourly: false},
        coupeCiseaux:  {price: 42, hourly: false},
        epilation:  {price: 30, hourly: true}
    },
    ppc: {
        bbtp: {price: 35, hourly: false},
        tonteCourte:  {price: 42, hourly: false},
        coupeCiseaux:  {price: 46, hourly: false},
        epilation:  {price: 30, hourly: true}
    },
    ppl: {
        bbtp: {price: 30, hourly: true},
        tonteCourte:  {price: 42, hourly: false},
        coupeCiseaux:  {price: 46, hourly: false},
        epilation:  {price: 30, hourly: true}
    },
    moyen: {
        bbtp: {price: 30, hourly: true},
        tonteCourte:  {price: 30, hourly: true},
        coupeCiseaux:  {price: 30, hourly: true},
        epilation:  {price: 35, hourly: true}
    },
    grand: {
        bbtp: {price: 35, hourly: true},
        tonteCourte:  {price: 35, hourly: true},
        coupeCiseaux:  {price: 35, hourly: true},
        epilation:  {price: 45, hourly: true}
    }
}