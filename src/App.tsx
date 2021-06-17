import { Box, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { PresentView, ExitView, IntroView } from './page';

import './App.css';

/*
 * The plan:
 * Show page with FeelsBirthdayMan Clap and small desc
 * Button to test audio (so he turns audio on for the site)
 * Another button to go to present page

 * Present page has 4 presents:
 *  - Kudo
 *  - Cameo
 *  - Bil clip
 *  - Whale vid
 *
 * When a present is clicked on, one of 4 audio files will play (OoT chest open, drum roll, Josh Widega, ???)
 * Present opens fullpage modal with content
 */

enum ProgressionState {
  INTRO = 0,
  GIFTS = 1,
  EXIT  = 2
}

const App = () => {
  let [progress, setProgress] = useState(ProgressionState.INTRO);

  switch (progress) {
    case ProgressionState.GIFTS:
      return wrapView(<PresentView />);
    case ProgressionState.EXIT:
      return wrapView(<ExitView />);
    // Don't need to explicitly handle ProgressionState.INTRO
    default:
      return wrapView(<IntroView />);
  }
}

function wrapView(child: JSX.Element) {
  return (
    <Box w="100vw"
        h="100vh">
      <Center>
        {child}
      </Center>
    </Box>
  );
}

export default App;
