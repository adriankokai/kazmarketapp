import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer green darken-3">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="orange-text text-darken-4">
                                    <i className="material-icons orange-text text-darken-4">shop</i>
                                    <span> Kaz Market</span>
                                </h5>
                                <p class="grey-text text-lighten-4">So out of the world and in your mind. Best marketplace on the planet!</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="orange-text text-darken-4">Links</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/signup">Signup</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/signin">Signin</a></li>
                                    <li><a class="grey-text text-lighten-3" href="post_ad">Post Ad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright green darken-4">
                        <div class="container">
                            © 2021 kazmarketapp 
                            <i>
                                <span> developed by </span>
                                <a href="https://www.instagram.com/_spiders.co_/" 
                                    target="_blank"
                                    className="orange-text text-darken-4"
                                    rel="noreferrer"
                                > 
                                    spiders.co 
                                </a>
                            </i>
                            <a class="grey-text text-lighten-4 right" href="#!">More Life No Dying</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
