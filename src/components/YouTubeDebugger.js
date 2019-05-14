import React from 'react';

class YouTubeDebugger extends React.Component {
constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
      resolution: '1080p'
    }
}

render () {
    return (
        <div >
        <button class='bitrate' onClick= {this.state.settings.bitrate=12}></button>
        <button class='resolution' onClick= {this.state.settings.video.resolution='720p'}></button>
        </div>
    )};
}

export default YouTubeDebugger;
