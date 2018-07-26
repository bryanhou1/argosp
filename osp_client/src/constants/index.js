export const ARG = "ARG";
export const GENOME_TAXONOMY = "Genome Taxonomy";
export const BLAST_CRITERIA = "Blast Criteria";
export const HABITAT = "Habitat"

export const DB = {
  ARG: "arg",
  SUBTYPE: "argSubtype",
  TYPE: "argType",
  GENOME: "genome",
  ACCESSION: "accession",
  PHYLUM: "taxonomicPhylum",
  CLASS: "taxonomicClass",
  ORDER: "taxonomicOrder",
  FAMILY: "taxonomicFamily",
  GENUS: "taxonomicGenus",
  SPECIES: "taxonomicSpecies",
  STRAIN: "strain",
  IDENTITY: "identity",
  HIT_RATIO: "hitRatio",
  HIT_LENGTH: "hitLength",
  ALIGNMENT_LENGTH: "alignmentLength",
  E_VALUE: "eValue",
  PATHOGEN: "pathogen",
  SAMPLE: "sample",
  ECO_TYPE: "ecoType",
  ECO_SUBTYPE: "ecoSubtype"
}

export const DISPLAY = {
  ARG: "Sequence",
  SUBTYPE: "Subtype",
  TYPE: "Type",
  GENOME: "Genome",
  ACCESSION: "Accession",
  PHYLUM: "Phylum",
  CLASS: "Class",
  ORDER: "Order",
  FAMILY: "Family",
  GENUS: "Genus",
  SPECIES: "Species",
  STRAIN: "Strain",
  IDENTITY: "Identity",
  HIT_RATIO: "Hit Ratio",
  HIT_LENGTH: "Hit Length",
  ALIGNMENT_LENGTH: "Alignment",
  E_VALUE: "E-Value",
  PATHOGEN: "Pathogen",
  SAMPLE: "Accession",
  ECO_TYPE: "Eco-type",
  ECO_SUBTYPE: "Eco-subtype",
}

export const SEARCH_START = "SEARCH_START";
export const FETCH_SEQUENCE_START = "FETCH_SEQUENCE_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const FETCH_SEQUENCE_SUCCESS = "FETCH_SEQUENCE_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const FETCH_SEQUENCE_FAILURE = "FETCH_SEQUENCE_FAILURE";
export const FETCH_AUTOCOMPLETE_START = "FETCH_AUTOCOMPLETE_START";
export const FETCH_AUTOCOMPLETE_SUCCESS = "FETCH_AUTOCOMPLETE_SUCCESS";
export const FETCH_AUTOCOMPLETE_FAILURE = "FETCH_AUTOCOMPLETE_FAILURE";
export const RENDER_TABLE_TWO = "RENDER_TABLE_TWO";
export const CHANGE_TABLE_TWO_UNIT = "CHANGE_TABLE_TWO_UNIT";
export const SWITCH_TABLE_TWO_PAGE = "SWITCH_TABLE_TWO_PAGE";
export const STORE_SEARCH_TERMS = "STORE_SEARCH_TERMS";
export const JOB_SUBMIT_SUCCESS = "JOB_SUBMIT_SUCCESS";
export const JOB_FETCHED = "JOB_FETCHED";
export const CLEAR_JOB_ID = "CLEAR_JOB_ID";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const BLAST_CRITERIA_ENTRIES = {
  1: {
    DB: [DB.IDENTITY, DB.HIT_RATIO, DB.E_VALUE],
    DISPLAY: [DISPLAY.IDENTITY, DISPLAY.HIT_RATIO, DISPLAY.E_VALUE]
  },
  2: {
    DB: [DB.IDENTITY, DB.HIT_LENGTH, DB.E_VALUE],
    DISPLAY: [DISPLAY.IDENTITY, DISPLAY.HIT_LENGTH, DISPLAY.E_VALUE]
  }
}

export const DISPLAY_LINKS = {
  [DB.ARG]: DISPLAY.ARG,
  [DB.SUBTYPE]: DISPLAY.SUBTYPE,
  [DB.TYPE]: DISPLAY.TYPE,
  [DB.GENOME]: DISPLAY.GENOME,
  [DB.ACCESSION]: DISPLAY.ACCESSION,
  [DB.PHYLUM]: DISPLAY.PHYLUM,
  [DB.CLASS]: DISPLAY.CLASS,
  [DB.ORDER]: DISPLAY.ORDER,
  [DB.FAMILY]: DISPLAY.FAMILY,
  [DB.GENUS]: DISPLAY.GENUS,
  [DB.SPECIES]: DISPLAY.SPECIES,
  [DB.STRAIN]: DISPLAY.STRAIN,
  [DB.PATHOGEN]: DISPLAY.PATHOGEN,
  [DB.SAMPLE]: DISPLAY.SAMPLE,
  [DB.ECO_TYPE]: DISPLAY.ECO_TYPE,
  [DB.ECO_SUBTYPE]: DISPLAY.ECO_SUBTYPE,
  [DB.E_VALUE]: DISPLAY.E_VALUE,
  [DB.HIT_RATIO]: DISPLAY.HIT_RATIO,
  [DB.HIT_LENGTH]: DISPLAY.HIT_LENGTH,
  [DB.IDENTITY]: DISPLAY.IDENTITY
}

// Genome: 
// Accession (Genomes): 
// Organism: the formal scientific name for the source organism
// Assembly_level: genome completeness (complete 100%, chromosome 75%-100%, contig 50%-75%, scaffold <50%)
// Phylum, Class, Order, Family, Genus, Species, Strain: 

export const DISPLAY_DESC = {
  [DB.ARG]: "ARG reference sequences, corresponds with ARGs-OAP 1.0",
  [DB.SUBTYPE]: "ARG subtypes/genotypes",
  [DB.TYPE]: "ARG types/phenotypes",
  [DB.GENOME]: "genbank assembly accession",
  [DB.ACCESSION]: "genbank sequence accession number",
  [DB.PHYLUM]: "The formal taxonomy information",
  [DB.CLASS]: "The formal taxonomy information",
  [DB.ORDER]: "The formal taxonomy information",
  [DB.FAMILY]: "The formal taxonomy information",
  [DB.GENUS]: "The formal taxonomy information",
  [DB.SPECIES]: "The formal taxonomy information",
  [DB.STRAIN]: "The formal taxonomy information",
  [DB.PATHOGEN]: "The potential pathogenicity, true for human pathogens, false for non-pathogens",
  [DB.SAMPLE]: "Run accession number of NCBI SRA or MG-RAST databases",
  [DB.ECO_TYPE]: "Habitat category type",
  [DB.ECO_SUBTYPE]: "Habitat category subtype",
  [DB.E_VALUE]: "",
  [DB.HIT_RATIO]: "",
  [DB.HIT_LENGTH]: "",
  [DB.IDENTITY]: ""
}


export const MENU_1 = [
  [ARG, [
    [DISPLAY_LINKS[DB.ARG],DB.ARG, DISPLAY_DESC[DB.ARG]],
    [DISPLAY_LINKS[DB.SUBTYPE],DB.SUBTYPE, DISPLAY_DESC[DB.SUBTYPE]],
    [DISPLAY_LINKS[DB.TYPE],DB.TYPE, DISPLAY_DESC[DB.TYPE]]
  ]],
  [GENOME_TAXONOMY, [
    [DISPLAY_LINKS[DB.GENOME],DB.GENOME, DISPLAY_DESC[DB.GENOME]],
    [DISPLAY_LINKS[DB.ACCESSION],DB.ACCESSION, DISPLAY_DESC[DB.ACCESSION]],
    [DISPLAY_LINKS[DB.PHYLUM],DB.PHYLUM, DISPLAY_DESC[DB.PHYLUM]],
    [DISPLAY_LINKS[DB.CLASS],DB.CLASS, DISPLAY_DESC[DB.CLASS]],
    [DISPLAY_LINKS[DB.ORDER],DB.ORDER, DISPLAY_DESC[DB.ORDER]],
    [DISPLAY_LINKS[DB.FAMILY],DB.FAMILY, DISPLAY_DESC[DB.FAMILY]],
    [DISPLAY_LINKS[DB.GENUS],DB.GENUS, DISPLAY_DESC[DB.GENUS]],
    [DISPLAY_LINKS[DB.SPECIES],DB.SPECIES, DISPLAY_DESC[DB.SPECIES]],
    [DISPLAY_LINKS[DB.STRAIN],DB.STRAIN, DISPLAY_DESC[DB.STRAIN]],
    [DISPLAY_LINKS[DB.PATHOGEN],DB.PATHOGEN, DISPLAY_DESC[DB.PATHOGEN]]
  ]]
]

export const MENU_2 = [
[ARG, [
  [DISPLAY_LINKS[DB.ARG], DB.ARG, DISPLAY_DESC[DB.ARG]],
  [DISPLAY_LINKS[DB.SUBTYPE], DB.SUBTYPE, DISPLAY_DESC[DB.SUBTYPE]],
  [DISPLAY_LINKS[DB.TYPE], DB.TYPE, DISPLAY_DESC[DB.TYPE]]
]],
[HABITAT, [
  [DISPLAY_LINKS[DB.SAMPLE], DB.SAMPLE, DISPLAY_DESC[DB.SAMPLE]],
  [DISPLAY_LINKS[DB.ECO_SUBTYPE], DB.ECO_SUBTYPE, DISPLAY_DESC[DB.ECO_SUBTYPE]],
  [DISPLAY_LINKS[DB.ECO_TYPE], DB.ECO_TYPE, DISPLAY_DESC[DB.ECO_TYPE]] 
]]]

export const TABLE_1_SIGNS = {
  [DB.IDENTITY]: " ≥ ",
  [DB.HIT_RATIO]: " ≥ ",
  [DB.E_VALUE]: " ≤ "
}

export const DEFAULT_VAL = {
  1:{
    [DB.IDENTITY]: "90",
    [DB.HIT_RATIO]: "0.8",
    [DB.E_VALUE]: "1e-5"
  },
  2:{
    [DB.IDENTITY]: "80",
    [DB.HIT_LENGTH]: "25",
    [DB.E_VALUE]: "1e-7"
  }
}