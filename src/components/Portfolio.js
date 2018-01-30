import React, {Component, Fragment} from 'react';
import firebase from './firebase.js';
import $ from "jquery";

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            galleryList: null,
            items: [],
            modalVisible: false,
            itemClicked: "",
        };

    }

    componentDidMount() {
        $('*').css({'overflow': 'visible'});
        const itemsRef = firebase.database().ref('projects');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let key in items) {
                let item = items[key];
                newState.push({
                    id: item,
                    img: item.img,
                    name: item.name,
                    description: item.description,
                    type: item.type,
                    price: item.price
                });
            }
            let pics = newState;//["https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/20799075_337523973365733_2638514073442649981_n.jpg?oh=0c768158eb59cd34f8171ca24c2b8e8b&oe=5AE9D165", "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/20882979_337523980032399_7504336161037352846_n.jpg?oh=a5e9104c0cdb1945558648ecf9dee207&oe=5AF6A0B7", "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/16683975_251800761938055_7725494421849808068_n.jpg?oh=f193b8e20e2e7113bd515f0d7d2ad192&oe=5AF9A23A", "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/17800495_280074535777344_1481065280017315874_n.jpg?oh=5bc3b35012cf28ae3c31da79bede7886&oe=5AB0DF87", "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/15740873_226904387761026_1224162871519400527_n.jpg?oh=513917e6328a1197e30207bebc5a9b45&oe=5AF2FC1E", "https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/14570791_186576781793787_8919324870054482273_o.jpg?oh=772dce3cb245810635cac236c2d81b2e&oe=5AB73011"];
            // let fragments = [];
            // let columns = 3;
            // for (let i = 0; i < pics.length / columns; i++) {
            //     let x = i * columns;
            //     let part = pics.slice(x, x + columns);
            //     let innerElements = part.map((item, i) =>
            //         <Fragment key={"item-" + i}>
            //             <div className="column is-4-desktop has-text-centered">
            //                 <div className={"animated num"+i}>
            //                     <img src={item.img} alt="FOOD" onClick={() => this.showModal(item)}/>
            //                 </div>
            //             </div>
            //         </Fragment>
            //     );
            //     let parentElement = (
            //         <div className="container has-margin-top">
            //             <div className="columns is-multiline">
            //                 {innerElements}
            //             </div>
            //         </div>
            //     );
            //     fragments.push(parentElement);
            // }
            //
            // let list = fragments.map((item, i) =>
            //     <Fragment key={"item-" + i}>
            //         {item}
            //     </Fragment>
            // );
            this.setState({allImagesLoaded: pics.length});
            let list = pics.map((item, i) =>
                <Fragment key={"item-" + i}>
                    <div className="column is-4-desktop has-text-centered">
                        <div className={"animated num" + i} onClick={() => this.showModal(item)}>
                            <h1 className="title" style={{textAlign: "center"}}>{item.name}</h1>
                            <img src={item.img} alt="FOOD" style={{objectFit: "cover", textAlign: "center"}}/>
                            <h2 className="subtitle" style={{textAlign: "center"}}>{item.description}</h2>
                        </div>
                    </div>
                </Fragment>
            );
            this.setState({
                galleryList: list
            });
            //Cancer code below here
            var boxes = document.querySelectorAll('.animated');
            for (let i = 0; i < boxes.length; i++) {
                var img = boxes[i].firstChild;
                var style = getComputedStyle(img);
                var newStyle = "animation-delay: " + (parseFloat(style.animationDelay) + (.2 * i)) + "s;";
                img.setAttribute("style", newStyle);
                style = getComputedStyle(boxes[i], ':before');
                newStyle = ".num" + i + "::before{animation-delay: " + (parseFloat(style.animationDelay.substring(0, 3)) + (.2 * i)) + "s, " + (parseFloat(style.animationDelay.substring(6)) + (.2 * i)) + "s;}";
                var sheet = document.createElement('style');
                sheet.type = 'text/css';
                sheet.innerHTML = newStyle;
                console.log(newStyle);
                document.getElementsByTagName('head')[0].appendChild(sheet);
                style = getComputedStyle(boxes[i], ':after');
                newStyle = ".num" + i + "::after{animation-delay: " + (parseFloat(style.animationDelay.substring(0, 3)) + (.2 * i)) + "s, " + (parseFloat(style.animationDelay.substring(6)) + (.2 * i)) + "s;}";
                var sheet = document.createElement('style');
                sheet.type = 'text/css';
                sheet.innerHTML = newStyle;
                console.log(newStyle);
                document.getElementsByTagName('head')[0].appendChild(sheet);

            }
        });
    }

    showModal = (item) => {
        window.open(item.price)
    };

    render() {

        return (
            <div style={{backgroundColor: "white"}}>
                <div className="long has-margin-bottom">
                    <div className="long-wrapper">
                    </div>
                    <div className="container has-margin-top">
                        <div className="columns is-multiline">
                            {this.state.galleryList}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Portfolio;
