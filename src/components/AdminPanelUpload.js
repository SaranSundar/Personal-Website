import React, {Component} from 'react';
import {confirmAlert} from 'react-confirm-alert'; // Import
import '../css/react-confirm-alert.css' // Import css
import firebase, {auth, provider} from './firebase.js'; // <--- add this line
import FileUploader from 'react-firebase-file-uploader';
import $ from "jquery";

class AdminPanelUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: '',
            uploadedFile: "",
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: '',
            user: null // <-- add this line
        };
    }

    componentDidMount() {
        $('*').css({'overflow': 'visible'});
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            }
        });
    }

    uploadToFirebase() {
        //alert("UPLOADING STARTING!");
        //ADD FIREBASE CODE HERE
        const itemsRef = firebase.database().ref('projects');
        const item = {
            img: this.state.avatarURL || "Test Image",
            name: this.item_name.value || "Test Name",
            description: this.item_description.value || "Test Description",
            type: this.item_type.value || "Test Type",
            price: this.item_price.value || "Test Price"
        };

        itemsRef.push(item).then(() => {
            this.statusUpdate("SUCCESS", "Finished uploading to database.")
        })
            .catch((error) => {
                this.statusUpdate("ERROR", error);
            });
    };

    statusUpdate = (status, mess) => {
        confirmAlert({
            title: status,                           // Title dialog
            message: mess,                       // Message dialog
            confirmLabel: 'Ok',                        // Text button confirm
        })
    };

    submit = () => {
        confirmAlert({
            title: 'Upload Item',                           // Title dialog
            message: 'Are you sure?',                       // Message dialog
            confirmLabel: 'Confirm',                        // Text button confirm
            cancelLabel: 'Cancel',                          // Text button cancel
            onConfirm: () => this.uploadToFirebase(),         // Action after Confirm
        })
    };

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    };
    handleUploadSuccess = (filename) => {
        this.setState({avatar: filename, progress: 100, isUploading: false});
        firebase.storage().ref('project_icons').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
    };

    uploadFile = () => {
        // console.log(this.file_uploader);
        this.file_uploader.click();
        // document.getElementById("clickme").click();
    };

    handleChange = (e) => {
        /* ... */
    };
    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    };
    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    };

    render() {
        return (
            <div className="container has-margin-top" style={{backgroundColor: "white"}}>
                <header>
                    <div>
                        <h1>User Authentication</h1>
                        {this.state.user ?
                            <button onClick={this.logout}>Log Out</button>
                            :
                            <button onClick={this.login}>Log In</button>
                        }
                    </div>
                    {this.state.user ?
                        <div>
                            <div>
                                <img src={this.state.user.photoURL}/>
                            </div>
                        </div>
                        :
                        <div>
                            <p>You must be logged in to upload content.</p>
                        </div>
                    }
                </header>
                <h1 className="title">Upload New Project to Site</h1>
                <div className="columns is-multiline">
                    <div className="column is-half-desktop">
                        <div className="dropzone-wrapper" onClick={this.uploadFile}
                             style={{border: "2px dashed black"}}>
                            {this.state.avatarURL === '' ?
                                <figure className="image">
                                    <img src="https://bulma.io/images/placeholders/480x480.png"
                                         alt="Upload Project Here"/>
                                </figure> :
                                <figure className="image">
                                    <img src={this.state.avatarURL} alt="Product Recieved"/>
                                </figure>
                            }
                            <label ref={(el) => this.file_uploader = el} style={{display: "none"}}>
                                <i className="fa fa-upload" aria-hidden="true"></i> Upload Image
                                <FileUploader
                                    hidden
                                    accept="image/*"
                                    storageRef={firebase.storage().ref('project_icons')}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    onProgress={this.handleProgress}
                                />
                            </label>
                            {this.state.isUploading &&
                            <p>Progress: {this.state.progress}</p>
                            }
                        </div>
                        <h1 className="title has-margin-top">Name</h1>
                        <input className="input is-medium has-margin-bottom" type="text" ref={(c) => this.item_name = c}
                               placeholder={this.state.uploadedFile !== "" ? this.state.uploadedFile.name : "Enter Project Name Here"}/>
                    </div>
                    <div className="column">
                        <h1 className="title">Description</h1>
                        <textarea className="textarea is-medium" placeholder="Enter Project Description Here" rows="12"
                                  ref={(c) => this.item_description = c}/>
                        <h1 className="title has-margin-top">Tags</h1>
                        <input className="input is-medium has-margin-bottom" type="text" ref={(c) => this.item_type = c}
                               placeholder={this.state.uploadedFile !== "" ? this.state.uploadedFile.name : "Java, Android, React, etc..."}/>
                        <h1 className="title">Url</h1>
                        <input className="input is-medium has-margin-bottom" type="text"
                               ref={(c) => this.item_price = c}
                               placeholder={this.state.uploadedFile !== "" ? this.state.uploadedFile.name : "Enter Url Here"}/>
                    </div>
                </div>
                <div className="field has-addons has-addons-centered has-margin-top has-margin-bottom">
                    <a className="button is-info is-large has-big-margin-bottom" onClick={this.submit}>
                        Upload
                    </a>
                </div>

            </div>
        );
    }
}

export default AdminPanelUpload;
