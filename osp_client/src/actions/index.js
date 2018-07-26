import axios from 'axios';
import * as CONST from '../constants/index';
import * as URL from '../config/url';

export const initiateSession = () => {
  //only for table 1
  return (dispatch, getState) => {
    dispatch({type: CONST.FETCH_SEQUENCE_START})

    return axios.get(`${URL.API_URL}/items1`).then(
      response => {
        dispatch({type: CONST.FETCH_SEQUENCE_SUCCESS, sequences: response.data, table: 1})
      }).catch(error => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        dispatch({type: CONST.FETCH_SEQUENCE_FAILURE, status: error.status, message: "Server Offline"})
      });
  

    // const request = axios({
    //   method: 'get',
    //   url: `${URL.API_URL}/items1`
    // })
    
    // return request.then(
    //   response => {
    //     dispatch({type: CONST.FETCH_SEQUENCE_SUCCESS, sequences: response.data, table: 1})
    //   }   
    // ).catch( 
    //   err => {
    //     console.log(err)
    //     console.log(err.response)
    //     dispatch({type: CONST.FETCH_SEQUENCE_FAILURE, rest: err,res: err.response} )
    //   }
    // )
  }
}

export const fetchAutoComplete = (attr, tableNo, str) => {
  return (dispatch, getState) => {
    dispatch({type: CONST.FETCH_AUTOCOMPLETE_START, tableNo: tableNo})
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/get_autocomplete_data_${tableNo}`,
      params: {
        "attr": attr,
        "string": str
      }
    })
    return request.then(
      response => {
        dispatch({ type: CONST.FETCH_AUTOCOMPLETE_SUCCESS, attr: response.data.attr, col: response.data.col.map(String).sort(), table: response.data.table})},
      err => {
        dispatch({type: CONST.FETCH_AUTOCOMPLETE_FAILURE, message: "Server Offline"})
        throw err;
      }
    )
  }
} 

export const searchTable1 = (query, tableNo) => {

    return (dispatch, getState) => {
      dispatch({ type: CONST.SEARCH_START })
      dispatch({ type: CONST.STORE_SEARCH_TERMS, query: query, tableNo: 1})
      
      const request = axios({
        method: 'get',
        url: `${URL.API_URL}/items${tableNo}_submit_job`,
        params: {query: query}
      })
  
      return request.then(
        response => {
          dispatch({ type: CONST.JOB_SUBMIT_SUCCESS, jobId: response.data.job_id, table: 1})
        },
        err => {
          dispatch({ type: CONST.SEARCH_FAILURE, message: "Server Offline" })
          throw err;
        }
      )
    }
  }

  export const getTable1 = (jobId) => {
    return (dispatch, getState) => {
      const request = axios({
        method: 'get',
        url: `${URL.API_URL}/items1_check_job`,
        params: {job_id: jobId}
      })
  
      return request.then(
        response => {
          if (response.status === 200) {
            dispatch({type: CONST.CLEAR_JOB_ID, id: 1}) 
            dispatch({ type: CONST.SEARCH_SUCCESS, sequences: response.data, table: 1})
          }
        },
        err => {
          dispatch({ type: CONST.SEARCH_FAILURE, message: "Server Offline" })
          throw err;
        }
      )
    }
  }
// export const searchTable1Old = (query, tableNo) => {

//   return (dispatch, getState) => {
//     dispatch({ type: CONST.SEARCH_START })
//     dispatch({ type: CONST.STORE_SEARCH_TERMS, query: query, tableNo: 1})
    
//     const request = axios({
//       method: 'get',
//       url: `${URL.API_URL}/items${tableNo}`,
//       params: {query: query}
//     })

//     return request.then(
//       response => {
//         dispatch({ type: CONST.SEARCH_SUCCESS, sequences: response.data, table: 1})
//       },
//       err => {
//         dispatch({ type: CONST.SEARCH_FAILURE, message: "Server Offline" })
//         throw err;
//       }
//     )
//   }
// }


export const searchTable2 = (query, tableNo) => {

  return (dispatch, getState) => {
    dispatch({ type: CONST.SEARCH_START })
    dispatch({ type: CONST.STORE_SEARCH_TERMS, query: query, tableNo: tableNo})
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/items${tableNo}_submit_job`,
      params: {query: query}
    })
    return request.then(
      response => {
        dispatch({ type: CONST.JOB_SUBMIT_SUCCESS, jobId: response.data.job_id, table: 2})
      },
      err => {
        dispatch({ type: CONST.SEARCH_FAILURE, message: "Server Offline" })
        throw err;
      }
    )
  }
}

export const getTable2 = (jobId) => {
  return (dispatch, getState) => {
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/items2_check_job`,
      params: {job_id: jobId}
    })

    return request.then(
      response => {
        if (response.status === 200 ) {
          //stop polling

          dispatch({type: CONST.CLEAR_JOB_ID, id: 2}) 

          let yLabels = ["ARG", "Subtype", "Type"];
          let xLabels = ["Sample", "EcoType", "EcoSubtype"];
          const {xHeaders, yHeaders, grid16s, gridCell, gridPpm} = response.data;
          let gridComp = [];
          //first row 
          gridComp.push(["",...xLabels])
          // top 4 rows
          let yHeadersT=yHeaders[0].map((x,i) => yHeaders.map(x => x[i]))
          let spaces = xLabels.map(()=> "")

          yLabels.forEach((yLabel, i) => gridComp.push([yLabel, ...spaces, ...yHeadersT[i]]))
        
          let builtGrids= {"16s": gridComp.slice(), cell: gridComp.slice(), ppm: gridComp.slice()}

          // refractor later
          grid16s.forEach((row, i) => {
            builtGrids["16s"].push(["", ...xHeaders[i], ...row])
          })
          gridCell.forEach((row, i) => {
            builtGrids.cell.push(["", ...xHeaders[i], ...row])
          })

          gridPpm.forEach((row, i) => {
            builtGrids.ppm.push(["", ...xHeaders[i], ...row])
          })

          dispatch({
            type: CONST.RENDER_TABLE_TWO,
            grid16s: grid16s,
            gridCell: gridCell,
            gridPpm: gridPpm,
            xHeaders: xHeaders,
            yHeaders: yHeaders,
            builtGrids: builtGrids
          })
        }
      },
      err => {
        dispatch({ type: CONST.SEARCH_FAILURE, message: "Server Offline" })
        throw err;
      }
    )
  }
}
// export const searchTable2old = (query, tableNo) => {

//   return (dispatch, getState) => {
//     dispatch({ type: CONST.SEARCH_START })
//     dispatch({ type: CONST.STORE_SEARCH_TERMS, query: query, tableNo: tableNo})
//     const request = axios({
//       method: 'get',
//       url: `${URL.API_URL}/items${tableNo}`,
//       params: {query: query}
//     })

//     return request.then(
//       response => {
//         const {table} = response.data;
//         let yLabels = ["ARG", "Subtype", "Type"];
//         let xLabels = ["Sample", "EcoType", "EcoSubtype"];
//         const {xHeaders, yHeaders, grid16s, gridCell, gridPpm} = response.data;
//         let gridComp = [];
//         //first row 
//         gridComp.push(["",...xLabels])
//         // top 4 rows
//         let yHeadersT=yHeaders[0].map((x,i) => yHeaders.map(x => x[i]))
//         let spaces = xLabels.map(()=> "")

//         yLabels.forEach((yLabel, i) => gridComp.push([yLabel, ...spaces, ...yHeadersT[i]]))
      
//         let builtGrids= {"16s": gridComp.slice(), cell: gridComp.slice(), ppm: gridComp.slice()}

//         // refractor later
//         grid16s.forEach((row, i) => {
//           builtGrids["16s"].push(["", ...xHeaders[i], ...row])
//         })
//         gridCell.forEach((row, i) => {
//           builtGrids.cell.push(["", ...xHeaders[i], ...row])
//         })

//         gridPpm.forEach((row, i) => {
//           builtGrids.ppm.push(["", ...xHeaders[i], ...row])
//         })

//         dispatch({
//           type: CONST.RENDER_TABLE_TWO,
//           grid16s: grid16s,
//           gridCell: gridCell,
//           gridPpm: gridPpm,
//           xHeaders: xHeaders,
//           yHeaders: yHeaders,
//           builtGrids: builtGrids
//         })
//       },
//       err => {
//         dispatch({ type: CONST.SEARCH_FAILURE })
//         throw err;
//       }
//     )
//   }
// }

export const changeTableTwoDisplayUnit = (displayUnit) => {
  return dispatch => {
    dispatch({ type: CONST.CHANGE_TABLE_TWO_UNIT, displayUnit: displayUnit })
    return;
  }
}

export const switchTableTwoPage = ({orientation, page}) => {
  return dispatch => {
    dispatch({type: CONST.SWITCH_TABLE_TWO_PAGE, orientation: orientation, page: page})
  }
}

export const clearErrors = () => {
  return dispatch => {
    dispatch({type: CONST.CLEAR_ERRORS})
  }
}