
const ProgressBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="demo">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" styles="width: 15%;">
                                <span >0%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" styles="width: 50%;">
                                <span >50%</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" styles="width: 100%;">
                                <span >100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
