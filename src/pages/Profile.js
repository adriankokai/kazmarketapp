import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/actions/fetchUser';
import { updateProfile } from '../store/actions/updateProfile';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: this.props.user ? this.props.user.last_name : '',
            email: this.props.user ? this.props.user.email : '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onUpdateProfile(
            this.state.first_name,
            this.state.last_name,
            this.state.email
        )
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount() {
        this.props.onFetchUser()
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <h3>
                        {
                            this.props.username !== null ?

                            this.props.username

                            :

                            "I and I"
                        } 
                    </h3>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="left col s12 m5 l5">
                                <label htmlFor="first_name">first_name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={this.state.first_name}
                                    onChange={this.handleChange}
                                    placeholder={this.props.user !== null && this.props.user !== undefined ? this.props.user.first_name : ''}
                                />
                            </div>
                            <div className="right col s12 m5 l5">
                                <label htmlFor="last_name">last_name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={this.state.last_name}
                                    onChange={this.handleChange}
                                    placeholder={this.props.user !== null && this.props.user !== undefined ? this.props.user.last_name : ''}
                                />
                            </div>
                        
                            <div className="col s12">
                                <label htmlFor="email">email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder={this.props.user !== null && this.props.user !== undefined ? this.props.user.email : ''}
                                />
                            </div>
                            <div className="col s12">
                                {
                                    this.props.loading ?

                                    "loading..."

                                    :

                                    <input
                                        type="submit"
                                        value="update"
                                        className="btn"
                                    />
                                }
                            </div>
                        </div>
                    </form>
                    
                </div>
                <br /><br /><br />
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.fetchUser.user,
        username: state.fetchUser.username,
        loading: state.fetchUser.loading || state.updateProfile.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(fetchUser()),
        onUpdateProfile: (first_name, last_name, email) => dispatch(
            updateProfile(first_name, last_name, email)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)