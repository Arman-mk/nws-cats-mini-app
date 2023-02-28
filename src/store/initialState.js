export const GET_RECORDS_REQUEST_STATE = {
    loading: false,
    moreLoading: false,
    success: false,
    fail: false,
    errorResponse: null,
    data: [],
    params: {
        page: 1,
        perPage: 50,
        filter: {},
        orderBy: 'createdAt:DESC',
    },
    meta: {
        pagination: {
            page: 1,
            perPage: 15,
            total: 0,
            totalPages: 1,
        },
    },
};

export const GET_SINGLE_REQUEST_STATE = {
    loading: false,
    success: false,
    fail: false,
    errorResponse: null,
    data: {},
};

export const POST_REQUEST_STATE = {
    loading: false,
    success: false,
    fail: false,
    errorResponse: null,
    errors: {},
};

export const DELETE_REQUEST_STATE = {
    loading: false,
    success: false,
    fail: false,
    activeId: null,
    errorResponse: null,
    errors: {},
};