import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css';

import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const Messages = () => (
    <ReduxToastr
        timeOut={10000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
);

export default Messages;
