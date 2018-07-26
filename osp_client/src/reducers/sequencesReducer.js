import * as CONST from '../constants/index';
import * as SAMPLE from '../constants/sample';
const initialState = {
  errors: []
  ,jobIds: {
    1: "",
    2: ""
  },
  sequences1: [],
  sequences2Grid: {
    display: false,
    builtGrids: {"16s": [[]], cell: [[]], ppm: [[]]},
    displayUnit: "16s",
    xLabels: [CONST.DISPLAY.SAMPLE, CONST.DISPLAY.ECO_TYPE, CONST.DISPLAY.ECO_SUBTYPE],
    yLabels:[CONST.DISPLAY.ARG, CONST.DISPLAY.TYPE, CONST.DISPLAY.SUBTYPE],
    xHeaders:SAMPLE.TABLE_TWO.X_HEADERS,
    yHeaders: SAMPLE.TABLE_TWO.Y_HEADERS,
    grid16s: SAMPLE.TABLE_TWO.GRID_16S,
    gridCell: SAMPLE.TABLE_TWO.GRID_CELL,
    gridPpm: SAMPLE.TABLE_TWO.GRID_PPM,
    paginate: {
      horizontal: {
        elPerPage: 10,
        pagesCount: 2,
        currentPage: 1
      },
      vertical: {
        elPerPage: 10,
        pagesCount: 2,
        currentPage: 1
      }
    },
  }, 
  fetching: false,
  searchedQuery: {
    1: {},
    2: {},
  },
  autoCompleteCollection: {
    1: {
      [CONST.DB.ARG]: [],
      [CONST.DB.SUBTYPE]: [],
      [CONST.DB.TYPE]: [],
      [CONST.DB.GENOME]: [],
      [CONST.DB.ACCESSION]: [],
      [CONST.DB.PHYLUM]: [],
      [CONST.DB.CLASS]: [],
      [CONST.DB.ORDER]: [],
      [CONST.DB.FAMILY]: [],
      [CONST.DB.GENUS]: [],
      [CONST.DB.SPECIES]: [],
      [CONST.DB.STRAIN]: [],
      [CONST.DB.PATHOGEN]: [],
      [CONST.DB.ALIGNMENT_LENGTH]: [],
      fetching: false
    }, 
    2: {
      [CONST.DB.SAMPLE]: [],
      [CONST.DB.ECO_TYPE]: [],
      [CONST.DB.ECO_SUBTYPE]: [],
      [CONST.DB.ARG]: [],
      [CONST.DB.SUBTYPE]: [],
      [CONST.DB.TYPE]: [],
      fetching: false
    },
    fetching: false,
  }}

export default function sequencesReducer(state = initialState, action){
  switch (action.type) {
    case CONST.SEARCH_START:
    case CONST.FETCH_SEQUENCE_START:
      return {...state, fetching: true}
    case CONST.SEARCH_SUCCESS:
    case CONST.FETCH_SEQUENCE_SUCCESS:
      return {...state, [`sequences${action.table}`]: action.sequences, fetching: false}
    case CONST.SEARCH_FAILURE:
    case CONST.FETCH_SEQUENCE_FAILURE:
      return {...state, fetching: false, errors: [...state.errors, action.message]}
    case CONST.JOB_SUBMIT_SUCCESS:
      return {...state, jobIds: {...state.jobIds, [`${action.table}`]: action.jobId}}
    case CONST.CHANGE_TABLE_TWO_UNIT:
      return {...state, sequences2Grid: {...state.sequences2Grid, displayUnit: action.displayUnit}}
    case CONST.SWITCH_TABLE_TWO_PAGE:{
      return {...state, sequences2Grid: {
        ...state.sequences2Grid, 
        paginate:{
          ...state.sequences2Grid.paginate,
          [action.orientation]: {
            ...state.sequences2Grid.paginate[action.orientation],
            currentPage: action.page
          }
        }
      }}
    }case CONST.RENDER_TABLE_TWO: {
      return { ...state,
        sequences2Grid: {...state.sequences2Grid, xHeaders: action.xHeaders, yHeaders: action.yHeaders, grid16s: action.grid16s, gridCell: action.gridCell, gridPpm: action.gridPpm, builtGrids: action.builtGrids, display: true,
          paginate:{
            horizontal: {
              ...state.sequences2Grid.paginate.horizontal,
              pagesCount: Math.ceil(action.grid16s[0].length/state.sequences2Grid.paginate.horizontal.elPerPage),
              currentPage: 1
            },
            vertical: {
              ...state.sequences2Grid.paginate.vertical,
              pagesCount: Math.ceil(action.grid16s.length/state.sequences2Grid.paginate.vertical.elPerPage),
              currentPage: 1
            }
          }
        },
      fetching: false
      }
    }
    case CONST.STORE_SEARCH_TERMS:
      return { ...state, searchedQuery: {
        ...state.searchedQuery,
        [action.tableNo]: action.query
      }}
    case CONST.FETCH_AUTOCOMPLETE_START:
      return { ...state, autoCompleteCollection: {...state.autoCompleteCollection, [action.tableNo]: {...state.autoCompleteCollection[action.tableNo], fetching: true}} }
    case CONST.FETCH_AUTOCOMPLETE_SUCCESS:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, [action.table]: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false} } }
    case CONST.FETCH_AUTOCOMPLETE_FAILURE:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection,
        1: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false},
        2: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false}},
      }
    case CONST.CLEAR_JOB_ID:
      return {...state, jobIds: {...state.jobIds, [action.id]: ""}}
    case CONST.CLEAR_ERRORS:
      return {...state, errors: []}
    default:
      return state;
  }
}