import Header from './components/Header';
import './styles/Home.css';
import { useState } from 'react';

function Home() {
    const [res, setRes] = useState(0);
    const btnPressed = (e) => {
        e.preventDefault();

        const url = document.querySelector("#url");
        if (url.value) {
            fetch("https://linkb.vercel.app/api/set", {
                method: 'POST',
                body: JSON.stringify({
                    "url": url.value
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => setRes(`https://linkb.vercel.app/v/${res}`))
        }
        url.innerText = "";
    }

    const copyUrl = (e) => {
        e.preventDefault();

        document.querySelector("#copyurl").select();
        document.execCommand("copy");
        document.querySelector("#copybtn").innerText = "Copied";
    }

    return (
        <>
            <Header />
            <div className="container" style={{ paddingTop: '30vh' }}>
                {
                    res ?
                        <form id="update_user">
                            <div className="new_user">
                                <div className="form-group">
                                    <input type="text" value={res} id="copyurl" autoComplete='off' />
                                </div>
                                <div className="form-group">
                                    <button type="button" onClick={copyUrl} id="copybtn" className="btn text-dark update">Copy URL</button>
                                </div>
                            </div>
                        </form>
                        :
                        <form id="update_user">
                            <div className="new_user">
                                <div className="form-group">
                                    <input type="text" name="url" id="url" autoComplete='off' placeholder="https://linkshort.vercel.app" />
                                </div>
                                <div className="form-group">
                                    <button type="button" onClick={btnPressed} className="btn text-dark update">Add</button>
                                </div>
                            </div>
                        </form>
                }
            </div>
        </>
    );
}

export default Home;