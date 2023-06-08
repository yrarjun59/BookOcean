import axios from 'axios';
import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,

    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL,

    BOOK_DELETE_REQUEST,
    BOOK_DELETE_SUCCESS,
    BOOK_DELETE_FAIL,

    BOOK_CREATE_REQUEST,
    BOOK_CREATE_SUCCESS,
    BOOK_CREATE_FAIL,

    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_SUCCESS,
    BOOK_UPDATE_FAIL,

    BOOK_CREATE_REVIEW_REQUEST,
    BOOK_CREATE_REVIEW_SUCCESS,
    BOOK_CREATE_REVIEW_FAIL,

    BOOK_TOP_REQUEST,
    BOOK_TOP_SUCCESS,
    BOOK_TOP_FAIL,

} from '../constants/bookConstants';


export const listBooks = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST });

        const { data } = await axios.get(`http://127.0.0.1:8000/api/books/${keyword}`);

        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

