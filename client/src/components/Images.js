import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";
import "./css/Images.css";

export class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      page: 1,
      sorted: false,
      btnText: 'SORT'
    };

    this.sortAlphabetically = this.sortAlphabetically.bind(this);
  }

  componentDidMount() {
    // make initial request:
    const url = `http://localhost:5000/api/photos?page=${this.state.page}`;

    axios.get(url).then((response) => {
      this.setState({ images: response.data.photos });
    });
  }

  fetchMoreImages = () => {
    // up:
    this.setState({ page: this.state.page + 1 });

    const url = `/api/photos?page=${this.state.page}`;
    axios.get(url).then((response) => {
      this.setState({ images: this.state.images.concat(response.data.photos), btnText: (this.state.btnText === 'SORT' ? 'SORT' : 'RE-SORT'), sorted: false });
    });
  };

  sortAlphabetically(event) {
    console.log("Gonnnna sort now");

    this.setState({
      images: this.state.images.sort((img1, img2) =>
        img1.title > img2.title ? 1 : -1
      ), sorted: true, btnText: "SORTED"
    });

  }

  render() {
    return (
      <>
        <button type="button" className={"btn " + this.state.btnText.toLowerCase()} onClick={this.sortAlphabetically}>
          {this.state.btnText}
        </button>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchMoreImages}
          hasMore={true}
          loader={<h2>LOADING....</h2>}
        >
          <div className="images-container">
            {this.state.images.map((image, index) => {
              return <Image key={index} image={image} />;
            })}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default Images;
