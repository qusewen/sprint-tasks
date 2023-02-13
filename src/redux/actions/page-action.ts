import axios from "axios";



export const pageType = {
    SET_PAGE: "SET_PAGE",
    SET_PAGE_SUCCESS: "SET_PAGE_SUCCESS",
    SET_PAGE_ERROR: "SET_PAGE_ERROR"
  }


export const getPage = (id:number) =>(

    async (dispatch: any) =>{

        dispatch({ type: pageType.SET_PAGE });
        axios
          .get(`https://strapi.cleverland.by/api/books/${id}`)
          .then((res) => {
            dispatch({
              type: pageType.SET_PAGE_SUCCESS,
              payload: res.data,

            })
              .catch((err: any) => {
                console.log(err.response, err);
                dispatch({ type: pageType.SET_PAGE_ERROR, payload: err.response })
              })
          })

        }


)
