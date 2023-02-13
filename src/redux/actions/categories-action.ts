import axios from "axios";



export const categoriesType = {
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_CATEGORIES_SUCCESS: "SET__CATEGORIES_SUCCESS",
    SET_CATEGORIES_ERROR: "SET_CATEGORIES_ERROR"
  }


export const getCategories = () =>(

    async (dispatch: any) =>{

        dispatch({ type: categoriesType.SET_CATEGORIES });
        axios
          .get('https://strapi.cleverland.by/api/categories')
          .then((res) => {
            dispatch({
              type: categoriesType.SET_CATEGORIES_SUCCESS,
              payload: res.data,

            })
              .catch((err: any) => {
                console.log(err.response, err);
                dispatch({ type: categoriesType.SET_CATEGORIES_ERROR, payload: err.response })
              })
          })

        }


)
