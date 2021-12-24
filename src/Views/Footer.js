import React from 'react'

const Footer = () => {
    return (

            <footer class="d-flex flex-col page-footer font-small cyan darken-3">
                <div class="container" style={{marginLeft:'5%', width:'100%'}}>
                    <div class="col-md py-4">
                        <div class="mb-5">
                        <a class="fb-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3"></i>
                        </a>
                        <a class="tw-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3"></i>
                        </a>
                        <a class="gplus-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3"></i>
                        </a>
                        <a class="li-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3"></i>
                        </a>
                        <a class="ins-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3"></i>
                        </a>
                        <a class="pin-ic" style={{marginRight:'15px'}}>
                            <i class="fab fa-pinterest fa-lg white-text"> </i>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="text-right py-4" style={{width:'50%'}}>© 2020 Copyright:
                    <a href="https://gmail.com/"> jabidabdul72@gmail.com</a>
                </div>
            </footer>

    )
}

export default Footer
