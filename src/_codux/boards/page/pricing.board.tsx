import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Pricing from '../../../app/(public)/pricing/page';

export default createBoard({
    name: 'Pricing',
    Board: () => <Pricing />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 421,
        windowWidth: 1024,
        windowHeight: 768
    }
});
