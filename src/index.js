import React from 'react';
import ReactDOM from 'react-dom';
import Resizer from 'react-image-file-resizer';

class ImageCompressingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgVal: null }
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }

    fileChangedHandler(event) {
        var fileInput = false
        if (event.target.files[0]) {
            fileInput = true
        }
        if (fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                700,
                700,
                'JPEG',
                100,
                0,
                uri => {
                    this.setState({ imgVal: uri });
                },
                'base64'
            );
        }
    }

    render() {
        return (
            <div className="container mt-3">
                {
                    this.state.imgVal !== null ?
                        <div className="alert alert-primary" role="alert">
                            Image is compressed!
                        </div>
                        : null
                }
                <input className="mt-3" type="file" onChange={this.fileChangedHandler} />
                {
                    this.state.imgVal !== null ? <a href={this.state.imgVal} download>
                        <button type="button" className="btn btn-primary">
                            Download
                       </button>
                    </a> : null
                }
            </div>
        );
    }
}

ReactDOM.render(<ImageCompressingApp />, document.getElementById('root'));