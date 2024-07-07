import React from 'react'

const Basic = ({title, fondo, icon, reportes, nomenclatura, classname, height}) =>{
    
    return (
        <div className={`box ${fondo?"dash-one":""} ${height}`}>
            <div className='mt-2'>
                <h2 className={`has-text-weight-bold ${icon?"is-relative":null}`}>{title}
                    {
                        icon?
                            <span className={`icon mr-2 icon-dash ${icon}`}>
                                <i className="fas fa-clipboard-list" aria-hidden="true"></i>
                            </span>
                        :null
                    }
                </h2>
                
            </div>
            <p className={'mt-3 is-size-1 has-text-weight-semibold is-size-full has-text-centered '+ classname}>{reportes}</p>
            <p className='is-size-7 has-text-grey-light'>{nomenclatura}</p>
        </div>
    )
}

export default Basic