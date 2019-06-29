import React, { Component } from "react";

class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: null,
			err: "",
		};
	}

	componentDidMount() {
		this.loadUserProfile();
	}

	loadUserProfile = () => {
		this.props.auth.getProfile((profile, err) =>
			this.setState({ profile, err })
		);
	};

	render() {
		const { profile } = this.state;
		if (!profile) {
			return null;
		}
		return (
			<>
				<h1>Profile</h1>
				<p>{profile.nickname}</p>
				<img
					style={{ maxHeight: "50px", maxWidth: "50px" }}
					src={profile.pic}
					alt="profile pic"
				/>
				<pre>{JSON.stringify(profile, null, 2)}</pre>
			</>
		);
	}
}

export default componentName;
