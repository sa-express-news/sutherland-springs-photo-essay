// @flow

import React, { Component } from 'react';
import Animate 				from 'grommet/components/Animate';

// scss
import './Photo.scss';

class Photo extends Component {
	_img: ?HTMLImageElement;

	componentWillUpdate(prevProps) {
		if (prevProps.slide.url !== this.props.slide.url) {
			this.removeOldPhoto();
		}
	}

	removeOldPhoto() {
		this._img.src = '';
	}

	setInlineStyles(property, navBarHeight) {
		return {
			[property]: window.innerHeight - navBarHeight - 3,
		};
	}

	render() {
		const { navBarHeight, slide } = this.props;
		return (
			<div className="Photo" style={this.setInlineStyles('height', navBarHeight)}>
				<div className="vertical-pos">
					<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
						<img 
							ref={c => (this._img = c)}
							src={slide.url} 
							alt={slide.caption} 
							style={this.setInlineStyles('maxHeight', navBarHeight)}
						/>
					</Animate>
				</div>
			</div>
		);
	}
}

export default Photo