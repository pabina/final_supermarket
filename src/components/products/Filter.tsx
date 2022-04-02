function Filter() {
    return (
        <><div className="sorting">
            <select id="country"  className="frm-field required sect">
                <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Default sorting</option>
                <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by popularity</option>
                <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by average rating</option>
                <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Sort by price</option>
            </select>
        </div>
            <div className="sorting-left">
                <select id="country1"  className="frm-field required sect">
                    <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 9</option>
                    <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 18</option>
                    <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>Item on page 32</option>
                    <option value="null"><i className="fa fa-arrow-right" aria-hidden="true"></i>All</option>
                </select>
            </div>
            <div className="clearfix"> </div></>
    )
}

export default Filter;