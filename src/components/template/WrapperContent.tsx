import React from 'react'



interface Props {
    childrenHeader: JSX.Element;
    childrenContent: JSX.Element;
}


function WrapperContent({ childrenHeader, childrenContent }: Props) {
    return (
        <>
            <div className="content-wrapper">

                {childrenHeader}

                {/* Main content */}
                <section className="content">
                    <div className='container-fluid'>

                        {childrenContent}
                    </div>

                </section>
                {/* /.content */}
            </div>
        </>
    )
}

export default WrapperContent