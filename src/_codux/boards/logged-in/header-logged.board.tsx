import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Header from '../../../app/_components/header/LoggedIn';

export default createBoard({
    name: 'Header Logged',
    Board: () => <Header />,
    isSnippet: true,
});
