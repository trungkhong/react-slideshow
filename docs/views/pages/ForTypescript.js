import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { forTS, tsConfigCodeString } from '../codeStrings';

const ForTypescript = () => {
  return (
    <div className="div-sec">
      <h1>Typescript</h1>
      <div>
        <p>1. In your tsconfig.json file add this to the compiler options</p>
        <div>
          <SyntaxHighlighter language="javascript" style={dark}>
            {tsConfigCodeString}
          </SyntaxHighlighter>
        </div>
        <div>
          2. Create a file in this directory{' '}
          <SyntaxHighlighter
            language="javascript"
            style={dark}
          >{`types/react-slideshow-image-simple/index.d.ts`}</SyntaxHighlighter>
        </div>
        <p>3. Copy and paste this into it</p>
        <div>
          <SyntaxHighlighter language="javascript" style={dark}>
            {forTS}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ForTypescript;
