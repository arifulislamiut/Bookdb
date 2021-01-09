import React from "react";

const Searchbar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input
                                placeholder="Search for Books"
                                type="text"
                                onChange={props.handleChange}
                            />
                            <div className="col s1 offset-s4">
                                <button className="waves-effect nav-wrapper btn">Search</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Searchbar;
