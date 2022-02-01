function Footer() {

    return <>
    
            <hr className="mt-5" />
            <footer className="container py-5">
                <div className="row">
                    <div className="col-6 col-md">
                        <h5>Information</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none text-primary" href="https://github.com/cansuyarkin" rel='noreferrer' target="_blank">Cansu Yarkın</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Tech Stack</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel='noreferrer' target="_blank">HTML</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel='noreferrer' target="_blank">CSS</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://getbootstrap.com/" rel='noreferrer' target="_blank">Bootstrap</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://styled-components.com/" rel='noreferrer' target="_blank">Styled Components</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://tr.reactjs.org/" rel='noreferrer' target="_blank">React</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://redux.js.org/" rel='noreferrer' target="_blank">Redux</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://react-redux.js.org/" rel='noreferrer' target="_blank">React Redux</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://www.npmjs.com/package/react-debounce-input" rel='noreferrer' target="_blank">react-debounce-input</a></li>
                            <li><a className="link-secondary text-decoration-none" href="https://react-query.tanstack.com/" rel='noreferrer' target="_blank">React Query</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>MovieDB Api</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="https://www.themoviedb.org/documentation/api" rel='noreferrer' target="_blank">Documentation</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        
    </>

};

export default Footer;