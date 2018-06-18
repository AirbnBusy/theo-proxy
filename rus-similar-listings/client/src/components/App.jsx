import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from './../styles/app.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.getSimilarListings = this.getSimilarListings.bind(this);
		this.scrollCarousel = this.scrollCarousel.bind(this);
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.state = {
			// listingId: props.listingId --> will be passed down from the proxy server
			similarListings: [],
			currentListings: [],
			lastThreeListings: false,
			firstThreeListings: true,
			modalListing: {},
			modalIsShown: false,
		};
	}

	componentDidMount() {
		this.getSimilarListings();
	}

	getSimilarListings() {
		// Bellow line of code will be unnecessary once proxy server is live, because id will be passed down from the proxy server
		const id = document.location.href.slice(31);
		axios.get(`http://localhost:3004/api/similar-listings/${id}`)
			.then((response) => {
				console.log(`Get request successful, here is the response data: ${response.data}`);
        response.data.forEach((listing) => {
          console.log(listing);
        });
				const currentListings = [];
				for (let i = 0; i < 3; i += 1) {
					currentListings.push(response.data[i]);
				}

				this.setState({
					similarListings: response.data,
					currentListings: currentListings,
				});
			})
			.catch((err) => {
				if (err) {
					console.log(`GET request FAILED, here is the error: ${err}`);
				}
			});
	}

	scrollCarousel(event) {
		const similarListings = this.state.similarListings;
		const currentListings = this.state.currentListings;
		let currentFirstListingIndex = 0;

		similarListings.forEach((listing, i) => {
			if (listing === currentListings[0]) {
				currentFirstListingIndex = i;
			}
		});

		function updateListingsForward() {
			const newCurrentListings = [];
			for (let i = currentFirstListingIndex + 1; i <= currentFirstListingIndex + 3; i += 1) {
				newCurrentListings.push(similarListings[i]);
			}
			return newCurrentListings;
		}

		function updateListingsBack() {
			const newCurrentListings = [];
			for (let i = currentFirstListingIndex - 1; i <= currentFirstListingIndex + 1; i += 1) {
				newCurrentListings.push(similarListings[i]);
			}
			return newCurrentListings;
		}

		if (event.target.id === 'forward') {
			if (currentFirstListingIndex === 8) {
				this.setState({
					currentListings: updateListingsForward(),
					lastThreeListings: true,
				});
			} else if (!this.state.lastThreeListings) {
				this.setState({
					currentListings: updateListingsForward(),
					firstThreeListings: false,
				});
			}
		} else if (event.target.id === 'back') {
			if (currentFirstListingIndex === 1) {
				this.setState({
					currentListings: updateListingsBack(),
					firstThreeListings: true,
				});
			} else if (!this.state.firstThreeListings) {
				this.setState({
					currentListings: updateListingsBack(),
					lastThreeListings: false,
				});
			}
		}

	}

	showModal(listing) {
		this.setState({
			modalListing: listing,
			modalIsShown: true,
		});
	}

	closeModal(event) {
		if (event.target.id === 'modal' || event.target.id === 'close') {
			this.setState({
				modalIsShown: false,
			});
		}
	}

	render() {
		let display;
		this.state.similarListings.length === 0 ?
			display = <div /> :
			display = <Carousel
									currentListings={this.state.currentListings}
									scrollCarousel={this.scrollCarousel}
									lastThreeListings={this.state.lastThreeListings}
									firstThreeListings={this.state.firstThreeListings}
									modalListing={this.state.modalListing}
									modalIsShown={this.state.modalIsShown}
									showModal={this.showModal}
									closeModal={this.closeModal}
								/>;

		return (
			<div className={styles.serviceContainer}>
				{ display }
			</div>
		);
	}
}

export default App;
