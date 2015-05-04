import ev = require('enumvalue');

enum Liquid {
    MICROORGANISM            = ev.next(),             //'LiquidType.MICROORGANISM',
    ANTIBIOTIC               = ev.next(),                //'LiquidType.ANTIBIOTIC',
    GROWTH_MEDIUM            = ev.next(),             //'LiquidType.GROWTH_MEDIUM',
    DNA                      = ev.next(),                       //'LiquidType.DNA',
    GENE                     = ev.next(),                      //'LiquidType.GENE',
    ORGANISM_PROPERTY        = ev.next(),         //'LiquidType.ORGANISM_PROPERTY',
    JUICE                    = ev.next(),                     //'LiquidType.JUICE',
    BUFFER                   = ev.next(),                    //'LiquidType.BUFFER',
    SALT_WATER               = ev.next(),                //'LiquidType.SALT_WATER',
    MICROTITER_WELLS         = ev.next(),          //'LiquidType.MICROTITER_WELLS',
    DEADLY                   = ev.next(),                    //'LiquidType.DEADLY',
    HOMO_SPLEEN              = ev.next(),               //'LiquidType.HOMO_SPLEEN',
    HYBRIDOMA_MEDIUM         = ev.next(),          //'LiquidType.HYBRIDOMA_MEDIUM',
    INSULIN                  = ev.next(),                   //'LiquidType.INSULIN',
    ANTIBODY_GOUT            = ev.next(),             //'LiquidType.ANTIBODY_GOUT',
    ANTIBODY_SMALLPOX        = ev.next(),         //'LiquidType.ANTIBODY_SMALLPOX',
    ANTIGEN_GOUT             = ev.next(),              //'LiquidType.ANTIGEN_GOUT',
    ANTIGEN_SMALLPOX         = ev.next(),          //'LiquidType.ANTIGEN_SMALLPOX',
    ADJUVANS                 = ev.next(),                  //'LiquidType.ADJUVANS',
    LIPASE_ENZYME            = ev.next(),             //'LiquidType.LIPASE_ENZYME',
    GFP                      = ev.next(),                       //'LiquidType.GFP',
    DESIGNED_DRUG            = ev.next(),             //'LiquidType.DESIGNED_DRUG',
    CYP_ENZYME               = ev.next(),                //'LiquidType.CYP_ENZYME',
    TARGET_RECEPTOR          = ev.next(),           //'LiquidType.TARGET_RECEPTOR',
    PRODUCED_INSULIN         = ev.next(),          //'LiquidType.PRODUCED_INSULIN',
    PRODUCED_LIPASE          = ev.next(),           //'LiquidType.PRODUCED_LIPASE',
    PRODUCED_ANTIBODY_GOUT   = ev.next(),    //'LiquidType.PRODUCED_ANTIBODY_GOUT',
    PRODUCED_ANTIBODY_POX    = ev.next(),     //'LiquidType.PRODUCED_ANTIBODY_POX',
    FLUORESCENT_2ND_ANTIBODY = ev.next(),  //'LiquidType.FLUORESCENT_2ND_ANTIBODY'
};

export = Liquid;
