export const selectTab = (id) => {
    console.log(id);
    return {
        type: 'TAB_SELECTED',
        payload: id,
    };
};

