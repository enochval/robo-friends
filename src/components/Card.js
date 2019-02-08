import React from 'react'

// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props
//         return (
//             <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//                 <img alt='robots' src={`${id}`} />
//                 <div>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         )
//     }
// }

const Card = ({ id, name, email }) => {
    // if(true) {
    //     throw new Error('Nooooo! it has happened')
    // }
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card