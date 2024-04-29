import React from 'react';
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const App = () => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition(); 
   if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <>
            <div className="container">
                <h2>Speech To Text Converter</h2>
                <br/>
                <p>A react hook that converts speech from the microphone to text and makes it
                    available to your react components.</p>

                <div className="main-content">
                    {transcript}
</div>
                <div className="btn-style">
                     <p>Microphone: {listening ? 'on' : 'off'}</p>
                    <button onClick={SpeechRecognition.startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
  <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
                </div>
            </div>
        </>
    );
};

export default App;