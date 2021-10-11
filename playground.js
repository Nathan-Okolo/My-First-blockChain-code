return (
    <div className="mainContainer">
        <div className="dataContainer">
            <div className="header">
                👋 Hey there!
            </div>

            <div className="bio">
               Hi am Nathan trying to learn Blockchain development. Today 
            </div>

      {currentAccount &&(
        <input type="text" className="waveButton" placeholder="Type something..." id="myInput"></input>
      )}
      {currentAccount &&(
        <button type="button" className="waveButton" onClick={wave}>Send a message</button>
      )}
             {/*
    * If there is no currentAccount render this button
    */}
    {!currentAccount && (
      <button className="waveButton" onClick={connectWallet}>
        Connect Wallet
      </button>
    )}

      {allWaves.map((wave, index) => {
      return (
        <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
          <div>Address: {wave.address}</div>
          <div>Time: {wave.timestamp.toString()}</div>
          <div>Message: {wave.message}</div>
        </div>)
    })}

        </div>
    </div>
);

export default App