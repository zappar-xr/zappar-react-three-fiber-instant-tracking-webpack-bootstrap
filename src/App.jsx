import React, { useState } from 'react';
import { ZapparCamera, InstantTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';


function App() {
    let [placementMode, setPlacementMode] = useState(true);
    return (
      <>
        <ZapparCanvas>
          <ZapparCamera />
          <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
            <mesh>
              <sphereBufferGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </InstantTracker>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />

        </ZapparCanvas>
        <div
          id="zappar-placement-ui"
          onClick={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          onKeyDown={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          role="button"
          tabIndex={0}
        >
          Tap here to
          {placementMode ? ' place ' : ' pick up '}
          the object
        </div>
      </>
    );
}

export default App;
