export const selectTab = (id) => (
    {
        type: 'TAB_SELECTED',
        payload: id,
    }
);

export const showTabs = (...tabs) => {
    const tabToShow = {};
    tabs.forEach(tab => tabToShow[tab] = true);
    return (
        {
            type: 'TAB_SHOWED',
            payload: tabToShow,
        }
    );
};
