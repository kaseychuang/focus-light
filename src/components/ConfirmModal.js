import React from 'react';

// props
// question
// body
// button-text
// onClick
const ConfirmModal = (props) => {

    const onClick = () => {
        {props.onClick()}
    }

    return (
        <div>
            <button data-toggle = "modal" data-target = "#confirmClear" className="btn btn-danger btn-sm">Clear All Tasks</button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="confirmClear" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to clear your task list?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.body}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={onClick} data-dismiss= "modal" className="btn btn-danger">Yes, Delete All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;