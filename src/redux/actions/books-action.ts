import axios from "axios";



export const bookTypes = {
    SET_BOOKS: "SET_BOOKS",
    SET_BOOKS_SUCCESS: "SET__BOOKS_SUCCESS",
    SET_BOOKS_ERROR: "SET_BOOKS_ERROR"
  }


export const getBooks = () =>(

    async (dispatch: any) =>{

        dispatch({ type: bookTypes.SET_BOOKS });
        axios
          .get('https://strapi.cleverland.by/api/books')
          .then((res) => {
            dispatch({
              type: bookTypes.SET_BOOKS_SUCCESS,
              payload: res.data,

            })
              // .catch((err: any) => {
              //   dispatch({ type: bookTypes.SET_BOOKS_ERROR, payload: err.response })
              // })
          })

        }


)


