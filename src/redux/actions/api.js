import HttpRequest from '../../util/HttpRequest';

export const api = (action) => (dispatch, getState) => {
    return httpRequestAction(action, dispatch, getState);
};

export const httpRequestAction = (action, dispatch) => {
    const {
        url,
        method = 'get',
        data = {},
        params = {},
        success,
        failure,
        loader
    } = action.payload;

    const { base, endpoint } = url;

   /* if(getState().site.token && getState().site.token.length){
        data.token = getState().site.token;
    };*/

    !loader || dispatch(loader(true));

    let options = {
        method: method,
        url   : endpoint ? base + endpoint : base
    };
    if (Object.keys(data).length) { options.data = data; }
    if (Object.keys(params).length) { options.params = params; }
    return new HttpRequest()(options)
        .then((response) => dispatch(success(response.data)))
        .then(() => !loader || dispatch(loader(false)))
        .catch(
            e => console.log(e),
            () => dispatch(failure(true))
        );
};